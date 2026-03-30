// Stub for BillingPeriodService - open source version
export class BillingPeriodService {
  async getBillingPeriod(_userId: number) {
    return {
      currentPeriodStart: new Date(),
      currentPeriodEnd: new Date(),
    };
  }

  async getOrCreateBillingPeriodInfo(_teamId: number) {
    return {
      currentPeriodStart: new Date(),
      currentPeriodEnd: new Date(),
      billingPeriod: null,
    };
  }
}
