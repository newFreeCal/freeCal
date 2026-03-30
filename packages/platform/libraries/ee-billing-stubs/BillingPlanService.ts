/**
 * Stub BillingPlanService for open-source version
 * Provides no-op implementation that returns empty results
 */

export class StubBillingPlanService {
  async getUserPlanByMemberships(_memberIds: number[]) {
    return [];
  }
}

export const stubBillingPlanService = new StubBillingPlanService();
export default StubBillingPlanService;
