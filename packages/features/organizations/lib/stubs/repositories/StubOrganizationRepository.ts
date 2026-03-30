export class StubOrganizationRepository {
  async getOrganizationById(_id: number) {
    return null;
  }
}

export class StubPlatformBillingRepository {
  async getPlatformOrganizationIdsWithActiveSubscriptions() {
    return [];
  }
  async getPlatformOrganizationIdsWithActiveOrGracePeriodSubscriptions() {
    return [];
  }
}
