export const stubBillingPeriodService = {
  getBillingPeriod() {
    return { start: new Date(), end: new Date() };
  },
  async getOrCreateBillingPeriodInfo(_teamId: number) {
    return {
      billingMode: "ACTIVE_USERS" as const,
      subscriptionStart: new Date(),
      subscriptionEnd: new Date(),
    };
  },
};

export class StubBillingPeriodService {
  async getBillingPeriod() {
    return { start: new Date(), end: new Date() };
  }
  async getOrCreateBillingPeriodInfo(_teamId: number) {
    return {
      billingMode: "ACTIVE_USERS" as const,
      subscriptionStart: new Date(),
      subscriptionEnd: new Date(),
      pricePerSeat: 0,
    };
  }
}
