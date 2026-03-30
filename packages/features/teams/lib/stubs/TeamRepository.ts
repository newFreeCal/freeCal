/**
 * Stub TeamRepository for open-source version
 */
import type { MembershipRole } from "@calcom/prisma/enums";

export class TeamRepository {
  constructor(_prisma?: any) {}

  async findUnique(_args: { where: { id: number } }): Promise<{
    id: number;
    name: string | null;
    parentId: number | null;
    isOrganization: boolean;
    slug: string;
    organizationSettings?: any;
    requestedSlug?: string;
    isPlatform?: boolean;
  } | null> {
    return null;
  }

  async findFirst(_args: { where: { slug: string } }): Promise<{
    id: number;
    slug: string;
    name: string | null;
    parentId: number | null;
    isOrganization: boolean;
    organizationSettings?: any;
    requestedSlug?: string;
    isPlatform?: boolean;
  } | null> {
    return null;
  }

  async findMany(_args: { where?: { organizationId?: number } }): Promise<
    {
      id: number;
      slug: string;
      name: string | null;
      parentId: number | null;
      isOrganization: boolean;
      organizationSettings?: any;
      requestedSlug?: string;
      isPlatform?: boolean;
    }[]
  > {
    return [];
  }

  async findById(_args: { id: number }): Promise<{
    id: number;
    slug: string;
    name: string | null;
    parentId: number | null;
    isOrganization: boolean;
    organizationSettings?: any;
    requestedSlug?: string;
    isPlatform?: boolean;
  } | null> {
    return null;
  }

  async findOrganizationIdBySlug(_args: { slug: string }): Promise<number | null> {
    return null;
  }

  async findFirstBySlugAndParentSlug(_args: {
    slug: string;
    parentSlug: string | null | undefined;
    select?: any;
  }): Promise<{ id: number; slug: string } | null> {
    return null;
  }

  async findOwnedTeamsByUserId(_args: { userId: number }): Promise<
    {
      id: number;
      slug: string;
      name: string | null;
      parentId: number | null;
      isOrganization: boolean;
      organizationSettings?: any;
      requestedSlug?: string;
      isPlatform?: boolean;
    }[]
  > {
    return [];
  }

  async findParentOrganizationByTeamId(_teamId: number): Promise<{
    id: number;
    slug: string;
    isOrganization: boolean;
    parentId: number | null;
    organizationSettings?: any;
    requestedSlug?: string;
    isPlatform?: boolean;
  } | null> {
    return null;
  }

  async findAllByParentId(_args: { parentId: number; select?: any }): Promise<
    {
      id: number;
      slug: string;
      name: string;
      isOrganization: boolean;
      organizationSettings?: any;
      requestedSlug?: string;
      isPlatform?: boolean;
    }[]
  > {
    return [];
  }

  async findByIdAndParentId(_args: {
    id: number;
    parentId: number;
    select?: any;
  }): Promise<{ id: number } | null> {
    return null;
  }

  async findTeamBySlugWithAdminRole(
    _slug: string,
    _userId?: number
  ): Promise<{ id: number; slug: string } | null> {
    return null;
  }

  async findTeamSlugById(_args: { id: number }): Promise<{ slug: string } | null> {
    return null;
  }

  async findOrganizationSettingsBySlug(_args: { slug: string }): Promise<{ organizationSettings: any }> {
    return {
      organizationSettings: null,
    };
  }

  async findByIdsAndOrgId(
    _args: { ids: number[]; orgId: number } | { teamIds: number[]; orgId: number }
  ): Promise<{ id: number; slug: string }[]> {
    return [];
  }

  async findTeamsByUserId(_args: { userId: number; includeOrgs?: boolean }): Promise<
    {
      id: number;
      slug: string;
      name: string | null;
      parentId: number | null;
      isOrganization: boolean;
      organizationSettings?: any;
      requestedSlug?: string;
      isPlatform?: boolean;
      logoUrl?: string | null;
      accepted: boolean;
      role: MembershipRole | null | undefined;
      isOrgAdmin?: boolean;
    }[]
  > {
    return [];
  }

  async removeMember(_teamId: number): Promise<{ success: boolean }> {
    return { success: true };
  }

  async findTeamsNotBelongingToOrgByIds(_args: any): Promise<{ id: number; slug: string }[]> {
    return [];
  }

  async isSlugAvailableForUpdate(_args: {
    slug: string;
    teamId: number;
    parentId?: number | null;
    orgId?: number | null;
  }): Promise<boolean> {
    return true;
  }

  async findByMemberEmail(_args: { email: string }): Promise<{ id: number; slug: string } | null> {
    return null;
  }

  async adminFindById(_args: { id: number }): Promise<{
    id: number;
    slug: string;
    name: string | null;
    parentId: number | null;
    isOrganization: boolean;
    organizationSettings?: any;
    requestedSlug?: string;
    isPlatform?: boolean;
  } | null> {
    return null;
  }

  async findByIdIncludePlatformBilling(_args: { id: number }): Promise<{
    id: number;
    slug: string;
    name: string | null;
    parentId: number | null;
    isOrganization: boolean;
    metadata?: any;
    isPlatform?: boolean;
    platformBilling?: {
      subscriptionId?: string | null;
    } | null;
  } | null> {
    return null;
  }

  async createWithNonExistentOwner(_args: { teamData: any; owner: any; creationSource: any }): Promise<{
    teamOwner: { id: number; email: string; username: string };
    team: { id: number; name: string; slug: string; isPlatform: boolean };
    ownerProfile: { username: string };
  }> {
    return {
      teamOwner: { id: 1, email: "stub@example.com", username: "stubowner" },
      team: { id: 1, name: "Stub Team", slug: "stub-team", isPlatform: false },
      ownerProfile: { username: "stubowner" },
    };
  }

  async findTeamMembersWithPermission(_args: {
    teamId: number;
    permission: string;
    fallbackRoles: any[];
  }): Promise<{ id: number; name: string | null; email: string; locale: string | null }[]> {
    return [];
  }

  async findOrgTeamsExcludingTeam(_args: { parentId: number; excludeTeamId: number }): Promise<
    {
      id: number;
      name: string | null;
      parentId: number | null;
      isOrganization: boolean;
      organizationSettings?: any;
      requestedSlug?: string;
      isPlatform?: boolean;
    }[]
  > {
    return [];
  }

  async findTeamWithParentHideBranding(_args: {
    teamId: number;
  }): Promise<{ hideBranding: boolean; parent?: { hideBranding: boolean } } | null> {
    return null;
  }

  async acceptInvitationByToken(_token: string): Promise<{ success: boolean; teamId: number } | null> {
    return null;
  }
}

export class StubTeamRepository extends TeamRepository {}
