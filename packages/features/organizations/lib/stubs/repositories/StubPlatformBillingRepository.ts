export class StubPlatformBillingRepository {
  async getPlatformOrganizationIdsWithActiveSubscriptions() {
    return [];
  }
  async getPlatformOrganizationIdsWithActiveOrGracePeriodSubscriptions() {
    return [];
  }
}
