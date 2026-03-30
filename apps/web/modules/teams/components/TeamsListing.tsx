/**
 * Stub for open-source version
 * Replaces EE-only TeamsListing component
 */
import type { TeamData } from "@calcom/features/teams/lib/stubs/getTeamData";

export type TeamsListingProps = {
  invitationAccepted?: boolean;
  teams: {
    id: number;
    slug: string;
    name: string | null;
    parentId: number | null;
    isOrganization: boolean;
    organizationSettings?: any;
    requestedSlug?: string;
    isPlatform?: boolean;
  }[];
  orgId: number | null;
  permissions: {
    canCreateTeam: boolean;
  };
  teamNameFromInvite: string | null;
  errorMsgFromInvite: string | null;
};

export const TeamsListing = ({
  invitationAccepted,
  teams,
  orgId,
  permissions,
  teamNameFromInvite,
  errorMsgFromInvite,
}: TeamsListingProps) => {
  return <></>;
};
