/**
 * Stub orgDomains for open-source version
 * Parameters accepted but not used - return simplified values for open-source
 */
export const orgDomains = {
  getOrgFullOrigin: (slug: string | null, options?: { protocol: boolean }) => {
    // Simplified stub implementation - in open-source, org domains work differently
    if (!slug) {
      return options?.protocol ? "https://example.com" : "example.com";
    }
    return `${slug}.example.com`;
  },
  getOrgSubdomain: () => "",
  isValidOrgSubdomain: () => false,
  isOrgDomain: () => false,
  getOrgDomainFromEmail: () => null,
  getDomainFromEmail: () => null,
};

export function getOrgDomainConfig(_req?: any, _fallback?: string | string[]) {
  // Simplified stub - in open-source, no org domain config needed
  return {
    currentOrgDomain: "",
    isValidOrgDomain: false,
  };
}

export const getBookerBaseUrlSync = () => "";

export const orgDomainConfig = getOrgDomainConfig;

export function getSlugOrRequestedSlug(slug: string) {
  // In open-source, we don't have requestedSlug metadata
  // Return Prisma query object that only checks slug
  return {
    slug,
  };
}

export function getOrgFullOrigin(slug: string | null | number, options?: { protocol: boolean }) {
  if (slug === null || typeof slug === "number") {
    return options?.protocol ? "https://example.com" : "example.com";
  }
  return orgDomains.getOrgFullOrigin(slug ?? "", options);
}

export const getOrgDomainConfigFromHostname = (_args: { hostname?: string }): any => {
  return {
    orgSlug: null,
    domain: null,
    isValidOrgDomain: false,
    currentOrgDomain: "",
  };
};

export const subdomainSuffix = (): string => "-calcal";
