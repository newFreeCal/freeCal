import type { IncomingMessage } from "node:http";
import process from "node:process";
import {
  ALLOWED_HOSTNAMES,
  IS_PRODUCTION,
  RESERVED_SUBDOMAINS,
  WEBAPP_URL,
  WEBSITE_URL,
} from "@calcom/lib/constants";
import { getTldPlus1 } from "@calcom/lib/getTldPlus1";
import logger from "@calcom/lib/logger";
import slugify from "@calcom/lib/slugify";
import type { Prisma } from "@calcom/prisma/client";
import { addDnsRecord, deleteDnsRecord } from "./deploymentServices/cloudflare";
import {
  createDomain as createVercelDomain,
  deleteDomain as deleteVercelDomain,
} from "./deploymentServices/vercel";

export function subdomainSuffix() {
  if (!IS_PRODUCTION && process.env.LOCAL_TESTING_DOMAIN_VERCEL) {
    return process.env.LOCAL_TESTING_DOMAIN_VERCEL;
  }
  const urlSplit = WEBAPP_URL.replace("https://", "")?.replace("http://", "").split(".");
  return urlSplit.length === 3 ? urlSplit.slice(1).join(".") : urlSplit.join(".");
}

const log = logger.getSubLogger({ prefix: ["domainManager/organization"] });
export const deleteDomain = async (slug: string) => {
  const domain = `${slug}.${subdomainSuffix()}`;
  // We must have some domain deleted
  let isDomainDeleted = false;

  // TODO: Ideally we should start storing the DNS and domain entries in DB for each organization
  // A separate DNS record is optional but if we have it, we must have it deleted
  let isDnsRecordDeleted = true;
  if (process.env.VERCEL_URL) {
    isDomainDeleted = await deleteVercelDomain(domain);
  }

  if (process.env.CLOUDFLARE_DNS) {
    isDnsRecordDeleted = await deleteDnsRecord(domain);
  }
  return isDomainDeleted && isDnsRecordDeleted;
  return false;
};

export const createDomain = async (slug: string) => {
  const domain = `${slug}.${subdomainSuffix()}`;

  // We must have some domain configured
  let domainConfigured = false;

  // A separate DNS record is optional but if we have it, we must have it configured
  let dnsConfigured = true;

  if (process.env.VERCEL_URL) {
    domainConfigured = await createVercelDomain(domain);
  }

  if (process.env.CLOUDFLARE_DNS) {
    dnsConfigured = await addDnsRecord(domain);
  }

  return domainConfigured && dnsConfigured;
};

export const renameDomain = async (oldSlug: string | null, newSlug: string) => {
  // First create new domain so that if it fails we still have the old domain
  await createDomain(newSlug);
  if (oldSlug) {
    try {
      await deleteDomain(oldSlug);
    } catch (e) {
      log.error(`renameDomain: Failed to delete old domain ${oldSlug}. Do a manual deletion if needed`);
    }
  }
};

// Org domain utility functions (moved from EE package for open-source compatibility)

export function getOrgFullOrigin(slug: string | null, options: { protocol: boolean } = { protocol: true }) {
  if (!slug) {
    const useWebappUrl =
      getTldPlus1(new URL(WEBSITE_URL).hostname) !== getTldPlus1(new URL(WEBAPP_URL).hostname);
    const baseUrl = useWebappUrl ? WEBAPP_URL : WEBSITE_URL;
    return options.protocol ? baseUrl : baseUrl.replace("https://", "").replace("http://", "");
  }

  const orgFullOrigin = `${
    options.protocol ? `${new URL(WEBSITE_URL).protocol}//` : ""
  }${slug}.${subdomainSuffix()}`;
  return orgFullOrigin;
}

export function whereClauseForOrgWithSlugOrRequestedSlug(slug: string) {
  const slugifiedValue = slugify(slug);

  return {
    OR: [
      { slug: slugifiedValue },
      {
        metadata: {
          path: ["requestedSlug"],
          equals: slug,
        },
      },
    ],
    isOrganization: true,
  } satisfies Prisma.TeamWhereInput;
}

export function orgDomainConfig(req: IncomingMessage | undefined, fallback?: string | string[]) {
  const hostname = req?.headers?.host || "";
  const currentOrgDomain = getOrgSlug(hostname);
  const isValidOrgDomain = currentOrgDomain !== null && !RESERVED_SUBDOMAINS.includes(currentOrgDomain);
  if (isValidOrgDomain || !fallback) {
    return {
      currentOrgDomain: isValidOrgDomain ? currentOrgDomain : null,
      isValidOrgDomain,
    };
  }
  const fallbackOrgSlug = fallback as string;
  const isValidFallbackDomain = !RESERVED_SUBDOMAINS.includes(fallbackOrgSlug);
  return {
    currentOrgDomain: isValidFallbackDomain ? fallbackOrgSlug : null,
    isValidOrgDomain: isValidFallbackDomain,
  };
}

function getOrgSlug(hostname: string, forcedSlug?: string) {
  if (!hostname.includes(".")) {
    return null;
  }
  const currentHostname = ALLOWED_HOSTNAMES.find((ahn) => {
    const url = new URL(WEBAPP_URL);
    const testHostname = `${url.hostname}${url.port ? `:${url.port}` : ""}`;
    return testHostname.endsWith(`.${ahn}`);
  });

  if (!currentHostname) {
    return null;
  }
  const slug = hostname.replace(currentHostname ? `.${currentHostname}` : "", "");
  const hasNoDotInSlug = slug.indexOf(".") === -1;
  if (hasNoDotInSlug) {
    return slug;
  }
  return null;
}
