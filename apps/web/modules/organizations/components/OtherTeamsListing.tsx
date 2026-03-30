/**
 * Stub for open-source version
 * Replaces EE-only OtherTeamsListing component
 */
import type { MembershipRole } from "@calcom/prisma/enums";
import type { ReactElement } from "react";

export type OtherTeamsListingProps = {
  teams: {
    id: number;
    name?: string | null;
    slug: string;
    isOrganization: boolean;
    parentId?: number | null;
    logoUrl?: string | null;
    accepted?: boolean;
    role?: MembershipRole | null;
    isOrgAdmin?: boolean;
    organizationSettings?: any;
    requestedSlug?: string;
    isPlatform?: boolean;
  }[];
};

export const OtherTeamsListing = ({ teams }: OtherTeamsListingProps): ReactElement => {
  return <></>;
};
