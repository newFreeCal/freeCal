/**
 * Stub for open-source version
 * Replaces EE-only OrganizationMembershipService
 */
import type { IOrganizationRepository } from "../repository/IOrganizationRepository";

export interface IOrganizationMembershipServiceDependencies {
  organizationRepository: IOrganizationRepository;
}

export class OrganizationMembershipService {
  constructor(private readonly deps: IOrganizationMembershipServiceDependencies) {}

  /**
   * Stub implementation - always returns true for auto-accept
   * In EE version, checks if email domain matches org auto-accept email
   */
  async shouldAutoAccept({
    organizationId,
    userEmail,
  }: {
    organizationId: number;
    userEmail: string;
  }): Promise<boolean> {
    return true;
  }
}

export function getOrganizationMembershipService(
  deps: IOrganizationMembershipServiceDependencies
): OrganizationMembershipService {
  return new OrganizationMembershipService(deps);
}
