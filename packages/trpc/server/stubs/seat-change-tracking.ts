export class StubSeatChangeTrackingService {
  logSeatAddition(_params: {
    teamId: number;
    userId?: number;
    count?: number;
    seatCount?: number;
    triggeredBy?: number;
  }) {
    // No-op in OSS
  }

  logSeatRemoval(_params: {
    teamId: number;
    userId?: number;
    count?: number;
    seatCount?: number;
    triggeredBy?: number;
  }) {
    // No-op in OSS
  }

  async getBillingPeriod() {
    return { start: new Date(), end: new Date() };
  }

  async getOrCreateBillingPeriodInfo(_teamId: number) {
    return {
      billingMode: "ACTIVE_USERS" as const,
      subscriptionStart: new Date(),
      subscriptionEnd: new Date(),
    };
  }
}

export const stubSeatChangeTrackingService = new StubSeatChangeTrackingService();
