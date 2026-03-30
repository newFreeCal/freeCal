export const stubBillingPlanService = {
  getBillingPlan() {
    return null;
  },
};

export class StubBillingPlanService {
  async getBillingPlan() {
    return null;
  }
  async getUserPlanByMemberships(_memberships: any[]) {
    return { plan: "free" };
  }
}

export function getBillingPlanService() {
  return new StubBillingPlanService();
}
