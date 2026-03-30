/**
 * Stub BillingPeriodService for open-source version
 * Provides no-op implementation that returns null/empty results
 */

export class StubBillingPeriodService {
  async getOrCreateBillingPeriodInfo(_teamId: number) {
    return {
      billingPeriod: null,
      billingMode: null,
      subscriptionStart: null,
      subscriptionEnd: null,
      trialEnd: null,
      isInTrial: false,
      pricePerSeat: null,
      isOrganization: false,
    };
  }

  async isAnnualPlan(_teamId: number) {
    return false;
  }

  async isInTrialPeriod(_teamId: number) {
    return false;
  }

  async shouldApplyMonthlyProration(_teamId: number) {
    return false;
  }

  async shouldApplyHighWaterMark(_teamId: number) {
    return false;
  }

  async isMonthlyBilling(_teamId: number) {
    return false;
  }

  async getBillingPeriodInfo(_teamId: number) {
    return {
      billingPeriod: null,
      billingMode: null,
      subscriptionStart: null,
      subscriptionEnd: null,
      trialEnd: null,
      isInTrial: false,
      pricePerSeat: null,
      isOrganization: false,
    };
  }

  async updateBillingPeriod(_params: { teamId: number; billingPeriod: any; pricePerSeat: number }) {
    return;
  }
}

export const stubBillingPeriodService = new StubBillingPeriodService();
export default StubBillingPeriodService;
