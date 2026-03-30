export class StubCreditService {
  async hasAvailableCredits(): Promise<boolean> {
    return true;
  }

  async chargeCredits(_args: {
    userId?: number;
    teamId?: number;
    credits: number | null;
    bookingUid?: string;
    smsSid?: string;
    smsSegments?: number;
    phoneNumber?: string;
    email?: string;
    callDuration?: number;
    creditFor?: string;
    externalRef?: string;
  }): Promise<{
    teamId?: number;
    userId?: number;
    lowCreditBalanceResult?: unknown;
  } | null> {
    return null;
  }

  async getTeamWithAvailableCredits(_userId: number) {
    return null;
  }

  async getUserOrTeamToCharge(_args: { credits: number; userId?: number | null; teamId?: number | null }) {
    return null;
  }

  async getMonthlyCredits(_teamId: number): Promise<number> {
    return 999999;
  }

  calculateCreditsFromPrice(price: number): number | null {
    return Math.ceil(price * 100) || null;
  }

  async getAllCredits(_args: { userId?: number | null; teamId?: number | null }): Promise<{
    totalMonthlyCredits: number;
    totalRemainingMonthlyCredits: number;
    additionalCredits: number;
    totalCreditsUsedThisMonth: number;
  }> {
    return {
      totalMonthlyCredits: 999999,
      totalRemainingMonthlyCredits: 999999,
      additionalCredits: 999999,
      totalCreditsUsedThisMonth: 0,
    };
  }

  async getAllCreditsForTeam(_teamId: number): Promise<{
    totalMonthlyCredits: number;
    totalRemainingMonthlyCredits: number;
    additionalCredits: number;
    totalCreditsUsedThisMonth: number;
  }> {
    return {
      totalMonthlyCredits: 999999,
      totalRemainingMonthlyCredits: 999999,
      additionalCredits: 999999,
      totalCreditsUsedThisMonth: 0,
    };
  }

  async moveCreditsFromTeamToOrg(_args: { teamId: number; orgId: number }): Promise<void> {
    // No-op
  }
}

export const stubCreditService = new StubCreditService();
