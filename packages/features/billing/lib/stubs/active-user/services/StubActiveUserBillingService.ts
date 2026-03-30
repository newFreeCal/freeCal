// Stub for ActiveUserBillingService - open source version
export const StubActiveUserBillingService = {
  updateUsage: () => Promise.resolve(),
  getUsage: () => Promise.resolve(0),
  getBookingsForUser: async (_userId: number, _teamId: number, _periodStart: Date, _periodEnd: Date) => {
    return [];
  },
  getActiveUsersForOrg: async (_orgId: number, _teamId: number, _periodStart: Date, _periodEnd: Date) => {
    return {
      activeUsers: [],
      totalUsers: 0,
    };
  },
};

export function getActiveUserBillingService() {
  return StubActiveUserBillingService;
}

export const ACTIVE_USER_BILLING_DI_TOKENS = {
  ActiveUserBillingService: Symbol("ActiveUserBillingService"),
};
