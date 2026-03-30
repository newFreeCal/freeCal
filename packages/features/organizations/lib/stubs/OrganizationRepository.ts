/**
 * Stub OrganizationRepository for open-source version
 * Provides no-op implementation that always succeeds/returns free values
 */
import type { MembershipRole } from "@calcom/prisma/enums";

export class OrganizationRepository {
  async findCalVideoLogoByOrgId(_args: { id: number }): Promise<string | null> {
    return null;
  }

  async findById(_args: {
    id: number;
  }): Promise<{ id: number; slug: string; name: string | null; isPlatform: boolean } | null> {
    return null;
  }

  async findByMemberEmail(_args: {
    email: string;
  }): Promise<{ id: number; slug: string; name: string | null; isPlatform: boolean } | null> {
    return null;
  }

  async checkIfPrivate(_args: { orgId: number; email?: string }): Promise<boolean> {
    return false;
  }

  async findUniqueNonPlatformOrgsByMatchingAutoAcceptEmail(_args: {
    email: string;
  }): Promise<{ id: number; slug: string | null; requestedSlug: string | null } | null> {
    return null;
  }

  async adminFindById(_args: {
    id: number;
  }): Promise<{ id: number; slug: string; name: string | null; isPlatform: boolean } | null> {
    return null;
  }

  async createWithNonExistentOwner(_args: { orgData: any; owner: any; creationSource: any }): Promise<{
    orgOwner: any;
    organization: { id: number; name: string; slug: string; isPlatform: boolean };
    ownerProfile: { username: string | null };
  }> {
    return {
      orgOwner: {
        id: 1,
        email: "stub@example.com",
        username: "stubowner",
        emailVerified: null,
      },
      organization: {
        id: 1,
        name: "Stub Organization",
        slug: "stub-org",
        isPlatform: false,
      },
      ownerProfile: {
        username: "stubowner",
      },
    };
  }

  async findCurrentOrg(_args: { userId: number; orgId: number }): Promise<{
    id: number;
    slug: string;
    name: string | null;
    isPlatform: boolean;
    isPrivate?: boolean;
    canAdminImpersonate?: boolean;
    user?: {
      role: any;
      accepted?: boolean;
    };
    organizationSettings?: any;
    requestedSlug?: string;
  } | null> {
    return {
      id: 1,
      slug: "test-org",
      name: "Test Organization",
      isPlatform: false,
      isPrivate: false,
      canAdminImpersonate: false,
      user: {
        role: "ADMIN",
        accepted: true,
      },
      organizationSettings: {},
      requestedSlug: undefined,
    };
  }

  async findTeamsInOrgIamNotPartOf(_args: { orgId?: number; parentId?: number; userId: number }): Promise<
    {
      id: number;
      name?: string | null;
      slug: string;
      isOrganization: boolean;
      parentId?: number | null;
      logoUrl?: string | null;
      accepted?: boolean;
      role?: MembershipRole | null | undefined;
      isOrgAdmin?: boolean;
      organizationSettings?: any;
      requestedSlug?: string;
      isPlatform?: boolean;
    }[]
  > {
    return [];
  }

  async createWithExistingUserAsOwner(_args: {
    orgData: any;
    owner: { id: number; email: string; username: string | null; nonOrgUsername?: string };
  }): Promise<{
    orgOwner: any;
    organization: { id: number; name: string; slug: string; isPlatform: boolean };
    ownerProfile: { username: string | null };
  }> {
    return {
      orgOwner: {
        id: 1,
        email: "stub@example.com",
        username: "stubowner",
        emailVerified: null,
      },
      organization: {
        id: 1,
        name: "Stub Org",
        slug: "stub-org",
        isPlatform: false,
      },
      ownerProfile: {
        username: "stubowner",
      },
    };
  }

  async getVerifiedOrganizationByAutoAcceptEmailDomain(_domain: string): Promise<Organization | null> {
    return null;
  }
}

export function getOrganizationRepository() {
  return new OrganizationRepository();
}

export type Organization = {
  id: number;
  slug: string;
  name: string | null;
  isPlatform: boolean;
  isPrivate?: boolean;
  organizationSettings?: any;
  requestedSlug?: string;
};
