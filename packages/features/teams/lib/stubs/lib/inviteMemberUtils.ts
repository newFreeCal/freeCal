/**
 * Stub inviteMemberUtils for open-source version
 */

export const createMemberships = async (
  _args: any
): Promise<{ id: number; userId: number; teamId: number; role: string }[]> => {
  return [];
};

export const getTeamOrThrow = async (_args: any): Promise<any> => {
  return {
    id: 1,
    metadata: {},
    isOrganization: false,
    isOrgAdmin: false,
    slug: "stub-team",
    organization: null,
    name: "Stub Team",
    parent: null,
  };
};

export const sendEmails = async (_args: any): Promise<void> => {
  // No-op in OSS
};

export const sendExistingUserTeamInviteEmails = async (_args: any): Promise<void> => {
  // No-op in OSS
};

export const sendSignupToOrganizationEmail = async (_args: any): Promise<void> => {
  // No-op in OSS
};

export interface TeamMembership {
  teamId: number;
  accepted: boolean;
}

export interface UserWithMembership {
  id: number;
  email: string;
  username: string | null;
  teams?: TeamMembership[];
  profiles: {
    organizationId: number;
  }[];
}

export function getParsedTeam<T extends { metadata?: any }>(team: T) {
  const metadata = team.metadata ?? {};
  const requestedSlug = metadata?.requestedSlug ?? null;
  const { metadata: _1, ...rest } = team;
  return {
    ...rest,
    requestedSlug,
    metadata: {
      ...metadata,
      requestedSlug,
    },
  };
}

export type Invitee = {
  id: number;
  email: string;
  name?: string | null;
  username?: string;
  accepted: boolean;
  role: string;
};
