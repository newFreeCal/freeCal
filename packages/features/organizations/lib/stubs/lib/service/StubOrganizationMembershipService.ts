export class StubOrganizationMembershipService {
  async isAdminOrOwner(_input: { orgId: number; memberId: number }) {
    return false;
  }
  async hasAdminRole(_input: { orgId: number; memberId: number }) {
    return false;
  }
}
