/**
 * Mock organization for testing
 */

import { beforeEach, vi } from "vitest";
import { mockDeep, mockReset } from "vitest-mock-extended";
import type { OrganizationRepository } from "../OrganizationRepository";

vi.mock("@calcom/features/organizations/lib/stubs/OrganizationRepository", () => organizationMock);

beforeEach(() => {
  mockReset(organizationMock.organizationRepository);
});

export const organizationMock = {
  id: 1,
  name: "Test Organization",
  slug: "test-org",
  logoUrl: null,
  domain: "test.com",
  domainSuffix: "test.com",
  fullDomain: "test.test.com",
  isOrganizationVerified: false,
  isAdminReviewed: false,
  isAdminAPIEnabled: false,
  orgAutoAcceptEmail: null,
  parentOrganizationId: null,
  organizationRepository: mockDeep<OrganizationRepository>(),
  /**
   * @deprecated Use organizationMock.organizationRepository.findByMemberEmail instead
   */
  findByMemberEmail: vi.fn(),
};

export const organizationScenarios = {
  organizationRepository: {
    findByMemberEmail: {
      /**
       * Mocks findByMemberEmail to return null (no match found)
       */
      fakeNoMatch: () => {
        organizationMock.organizationRepository.findByMemberEmail.mockResolvedValue(null);
      },
      /**
       * Mocks findByMemberEmail to return a team/organization
       * @param organization - The organization object to return
       * @param _args - The arguments passed to the method (for validation if needed)
       */
      fakeReturnOrganization: (
        organization: { id: number; slug: string; name: string | null; isPlatform: boolean },
        _args?: { email: string }
      ) => {
        organizationMock.organizationRepository.findByMemberEmail.mockResolvedValue(organization);
        return organization;
      },
    },
    findUniqueNonPlatformOrgsByMatchingAutoAcceptEmail: {
      /**
       * Mocks findUniqueNonPlatformOrgsByMatchingAutoAcceptEmail to return null (no match found)
       */
      fakeNoMatch: () => {
        organizationMock.organizationRepository.findUniqueNonPlatformOrgsByMatchingAutoAcceptEmail.mockResolvedValue(
          null
        );
      },
      /**
       * Mocks findUniqueNonPlatformOrgsByMatchingAutoAcceptEmail to return an organization
       * @param organization - The organization object to return (with id, slug, and optionally requestedSlug)
       * @param _args - The arguments passed to the method (for validation if needed)
       */
      fakeReturnOrganization: (
        organization: { id: number | string; slug: string | null; requestedSlug: string | null },
        _args?: { email: string }
      ) => {
        organizationMock.organizationRepository.findUniqueNonPlatformOrgsByMatchingAutoAcceptEmail.mockResolvedValue(
          organization
        );
        return organization;
      },
    },
  },
};

export default organizationMock;
