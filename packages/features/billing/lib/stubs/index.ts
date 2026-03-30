/**
 * Stub Billing for open-source version
 */
export const IBillingRepository = {
  SubscriptionStatus: {
    ACTIVE: "active",
    PAST_DUE: "past_due",
    UNPAID: "unpaid",
    CANCELED: "canceled",
    INCOMPLETE: "incomplete",
    INCOMPLETE_EXPIRED: "incomplete_expired",
    TRIALING: "trialing",
    PENDING: "pending",
  },
};

type SubscriptionDates = {
  subscriptionStart?: Date | null;
  subscriptionEnd?: Date | null;
  subscriptionTrialEnd?: Date | null;
};

export const getBillingProviderService = () => ({
  getSubscriptionStatus: () => IBillingRepository.SubscriptionStatus.CANCELED,
  createCustomer: async (_args: any) => ({
    id: "stub-customer-id",
    stripeCustomerId: "stub-stripe-customer-id",
    email: _args?.email,
    metadata: _args?.metadata,
  }),
  getCustomer: async (_customerId: string) => ({
    id: _customerId,
    deleted: false,
    email: "stub@example.com",
    metadata: {
      username: "stub-username",
    },
  }),
  createSubscriptionCheckout: async (_args: any) => ({
    sessionId: "stub-checkout-session-id",
    url: "/",
  }),
  getCheckoutSession: async (_sessionId: string) => ({
    id: _sessionId,
    customer: { id: "stub-customer-id", deleted: false },
    subscription: "stub-subscription-id",
    payment_status: "paid",
  }),
  extractSubscriptionDates: (_subscription: any): SubscriptionDates => ({
    subscriptionStart: null,
    subscriptionEnd: null,
    subscriptionTrialEnd: null,
  }),
  updateCustomer: async (_args: any) => {
    // No-op for open-source version
  },
});

type TeamBillingService = {
  saveTeamBilling: (_args: any) => Promise<void>;
  updateQuantity: (_plan?: string) => Promise<void>;
};

export const getTeamBillingServiceFactory = () => ({
  createTeamSubscription: () => Promise.resolve({ success: true }),
  getTeamSubscription: () => Promise.resolve(null),
  initMany: (teams: any[]) => {
    return teams.map((team) => ({
      updateQuantity: (_plan?: string) => Promise.resolve(),
    }));
  },
  init: (_team: any): TeamBillingService => ({
    saveTeamBilling: async (_args: any) => {},
    updateQuantity: async (_plan?: string) => {},
  }),
});
