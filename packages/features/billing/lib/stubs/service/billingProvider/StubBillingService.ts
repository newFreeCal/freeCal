/**
 * Stub BillingService for open-source version
 */
export class StubBillingService {
  async getSubscriptionStatus(_teamId: number) {
    return "canceled";
  }

  async createTeamSubscription(_args: { teamId: number; planId: string; quantity: number }) {
    return { success: true };
  }

  async getTeamSubscription(_teamId: number) {
    return null;
  }

  async updateQuantity(_teamId: number, _quantity: number) {
    return { success: true };
  }

  async cancelSubscription(_teamId: number) {
    return { success: true };
  }
}

export function getBillingServiceFactory() {
  return () => new StubBillingService();
}
