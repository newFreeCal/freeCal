/**
 * Stub ActiveUserBillingService for open-source version
 * Provides no-op implementation that returns empty results
 */

import type { ActiveUsersBreakdown } from "../ee-billing-stubs/ActiveUserBillingService";

export interface IActiveUserBillingServiceDeps {
  activeUserBillingRepository?: any;
}

export class StubActiveUserBillingService {
  private deps: IActiveUserBillingServiceDeps;

  constructor(deps?: IActiveUserBillingServiceDeps) {
    this.deps = deps || {};
  }

  async getActiveUserCountForPlatformOrg(
    _subscriptionId: string,
    _periodStart: Date,
    _periodEnd: Date
  ): Promise<number> {
    return 0;
  }

  async getActiveUserCountForOrg(_orgId: number, _periodStart: Date, _periodEnd: Date): Promise<number> {
    return 0;
  }

  async getActiveUsersForOrg(
    _orgId: number,
    _periodStart: Date,
    _periodEnd: Date
  ): Promise<ActiveUsersBreakdown> {
    return { activeUsers: [], totalMembers: 0, activeHosts: 0, activeAttendees: 0 };
  }

  async getBookingsForUser(
    _userId: number,
    _email: string,
    _activeAs: "host" | "attendee",
    _periodStart: Date,
    _periodEnd: Date
  ): Promise<
    Array<{
      id: number;
      uid: string;
      title: string;
      startTime: Date;
      endTime: Date;
      otherParty: string;
    }>
  > {
    return [];
  }
}

export const ActiveUserBillingService = StubActiveUserBillingService;

export const stubActiveUserBillingService = new StubActiveUserBillingService();
export default StubActiveUserBillingService;
