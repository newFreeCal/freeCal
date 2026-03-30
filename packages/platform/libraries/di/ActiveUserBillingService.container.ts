export const ACTIVE_USER_BILLING_DI_TOKENS = {
  IBillingProviderService: "IBillingProviderService",
  IBillingPeriodService: "IBillingPeriodService",
  IBillingPlanService: "IBillingPlanService",
  IDueInvoiceService: "IDueInvoiceService",
  ISeatChangeTrackingService: "ISeatChangeTrackingService",
  IActiveUserBillingService: "IActiveUserBillingService",
};

export const Billing = {
  container: {},
};

export const CHECKOUT_SESSION_TYPES = {
  TEAM_SUBSCRIPTION: "team_subscription",
  ORGANIZATION_SUBSCRIPTION: "organization_subscription",
};

export function getBillingProviderService() {
  return null;
}

export function getTeamBillingServiceFactory() {
  return null;
}

export const stubBillingPeriodService = {
  getBillingPeriod() {
    return { start: new Date(), end: new Date() };
  },
};

export const stubBillingPlanService = {
  getBillingPlan() {
    return null;
  },
};

export const stubDueInvoiceService = {
  getDueInvoiceData() {
    return null;
  },
};

export const stubSeatChangeTrackingService = {
  logSeatAddition(_params: {
    teamId: number;
    userId: number;
    count?: number;
    seatCount?: number;
    triggeredBy?: number;
  }) {
    // No-op in OSS
  },

  logSeatRemoval(_params: {
    teamId: number;
    userId: number;
    count?: number;
    seatCount?: number;
    triggeredBy?: number;
  }) {
    // No-op in OSS
  },
};

export class StubBillingPeriodService {
  async getBillingPeriod() {
    return { start: new Date(), end: new Date() };
  }
}

export class StubBillingPlanService {
  async getBillingPlan() {
    return null;
  }
}

export class StubDueInvoiceService {
  async getDueInvoiceData() {
    return null;
  }
}

export class StubSeatChangeTrackingService {
  logSeatAddition(_params: {
    teamId: number;
    userId: number;
    count?: number;
    seatCount?: number;
    triggeredBy?: number;
  }) {
    // No-op in OSS
  }

  logSeatRemoval(_params: {
    teamId: number;
    userId: number;
    count?: number;
    seatCount?: number;
    triggeredBy?: number;
  }) {
    // No-op in OSS
  }
}

export function getActiveUserBillingService() {
  return null;
}
