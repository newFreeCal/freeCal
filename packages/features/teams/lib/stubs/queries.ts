/**
 * Stub queries for open-source version
 */
export const getTeamMembers = () => [];

export const getTeamMemberById = () => null;

export const findTeamBySlugWithAdminRole = () => null;

export const findOwnedTeamsByUserId = () => [];

export const isTeamOwner = (_userId: number, _teamId: number) => false;

export const getTeamWithoutMembers = (_args: {
  id: number;
  userId?: number;
  isOrgView?: boolean;
  isTeamView?: boolean;
}): {
  id: number;
  name: string | null;
  slug: string;
  isOrganization: boolean;
  isPrivate: boolean;
  parent?: { id: number; name?: string; slug?: string } | null;
} | null => {
  return null;
};

export const getTeamWithMembers = (_args: {
  id?: number;
  slug?: string;
  userId?: number;
  orgSlug?: string | null;
  isTeamView?: boolean;
  currentOrg?: { id: number } | null;
  isOrgView?: boolean;
}): any => {
  return null;
};

export type TeamWithMembers = {
  id: number;
  name: string | null;
  slug: string;
  parentId: number | null;
  organizationSettings?: any;
  requestedSlug?: string | undefined;
  isPlatform?: boolean;
  isOrganization?: boolean;
  [key: string]: any;
};

export const getParsedTeam = <T extends { metadata?: any }>(team: T) => {
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
};

export const isTeamMember = (_userId: number, _teamId: number) => false;

export const updateNewTeamMemberEventTypes = (_userId?: number, _teamId?: number) => null;
