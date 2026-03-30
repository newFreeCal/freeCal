export const ACTIVE_USER_BILLING_DI_TOKENS = {
  IBillingProviderService: "IBillingProviderService",
  IBillingPeriodService: "IBillingPeriodService",
  IBillingPlanService: "IBillingPlanService",
  IDueInvoiceService: "IDueInvoiceService",
  ISeatChangeTrackingService: "ISeatChangeTrackingService",
  IActiveUserBillingService: "IActiveUserBillingService",
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

export interface ActiveUsersBreakdown {
  activeUsers: Array<{
    id: number;
    email: string;
    name: string | null;
    activeAs: "host" | "attendee";
  }>;
  totalMembers: number;
  activeHosts: number;
  activeAttendees: number;
}

export function getActiveUserBillingService() {
  return {
    async getActiveUsersForOrg(_teamId: number, _start: Date, _end: Date): Promise<ActiveUsersBreakdown> {
      return {
        activeUsers: [],
        totalMembers: 0,
        activeHosts: 0,
        activeAttendees: 0,
      };
    },
    async getBookingsForUser(
      _userId: number,
      _email: string,
      _activeAs: "host" | "attendee",
      _periodStart: Date,
      _periodEnd: Date
    ): Promise<Booking[]> {
      return [];
    },
  };
}

export interface Booking {
  id: number;
  uid: string;
  title: string;
  startTime: Date;
  endTime: Date;
  otherParty: string;
}
