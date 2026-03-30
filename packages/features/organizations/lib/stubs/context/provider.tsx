import type { MembershipRole } from "@calcom/prisma/enums";
import type { teamMetadataSchema } from "@calcom/prisma/zod-utils";
import { createContext, useContext } from "react";
import type z from "zod";

/**
 * Organization branding
 */
export type OrganizationBranding =
  | ({
      id: number;
      name?: string;
      slug: string;
      logoUrl?: string | null;
      fullDomain: string;
      domainSuffix: string;
      role: MembershipRole;
    } & z.infer<typeof teamMetadataSchema>)
  | null
  | undefined;

const OrganizationBrandingContext = createContext<{ orgBrand: OrganizationBranding } | null>(null);

export function useOrgBranding() {
  const orgBrandingContext = useContext(OrganizationBrandingContext);
  if (!orgBrandingContext) throw new Error("Error: useOrgBranding was used outside of OrgBrandingProvider.");
  return orgBrandingContext.orgBrand;
}

export function OrgBrandingProvider<F extends { orgBrand: OrganizationBranding }>(props: {
  value: F;
  children: React.ReactNode;
}) {
  return (
    <OrganizationBrandingContext.Provider value={props.value}>
      {props.children}
    </OrganizationBrandingContext.Provider>
  );
}
