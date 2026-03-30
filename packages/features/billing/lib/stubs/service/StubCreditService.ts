import type { PrismaTransaction } from "@calcom/prisma";
import type { TFunction } from "i18next";

/**
 * Stub implementation of CreditService for open-source version.
 * Always returns sufficient credits and skips all billing checks.
 */
export class StubCreditService {
  /**
   * Always returns true - credits are unlimited in open-source version
   */
  async hasAvailableCredits(): Promise<boolean> {
    return true;
  }

  /**
   * No-op - no actual charging in open-source version
   */
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

  /**
   * Always returns user as having available credits
   */
  async getTeamWithAvailableCredits(_userId: number) {
    return null;
  }

  /**
   * Always returns success - no team/user charging needed
   */
  async getUserOrTeamToCharge(_args: { credits: number; userId?: number | null; teamId?: number | null }) {
    return null;
  }

  /**
   * Calculate credits from price - always returns 0 for open-source
   */
  calculateCreditsFromPrice(_args: { price: number; currency?: string }) {
    return 0;
  }

  /**
   * Internal method - no-op
   */
  protected async _getUserOrTeamToCharge(_args: {
    credits: number;
    userId?: number | null;
    teamId?: number | null;
    tx: PrismaTransaction;
  }) {
    return null;
  }

  /**
   * No-op - no expense logging in open-source version
   */
  protected async _createExpenseLog(_args: {
    bookingUid?: string;
    smsSid?: string;
    teamId?: number;
    userId?: number;
    credits: number | null;
    creditType: string;
    smsSegments?: number;
    phoneNumber?: string;
    email?: string;
    callDuration?: number;
    creditFor?: string;
    tx: PrismaTransaction;
    externalRef?: string;
  }): Promise<void> {
    // No-op
  }

  /**
   * No-op - no low credit balance handling in open-source version
   */
  protected async _handleLowCreditBalance(_args: {
    teamId?: number | null;
    userId?: number | null;
    remainingCredits: number;
    creditFor?: string;
    tx: PrismaTransaction;
  }): Promise<unknown> {
    return null;
  }

  /**
   * No-op - no email sending in open-source version
   */
  protected async _handleLowCreditBalanceResult(_args: {
    lowCreditBalanceResult: {
      type: "LIMIT_REACHED" | "WARNING";
      team?: {
        id: number;
        name: string;
        adminAndOwners: {
          id: number;
          name: string | null;
          email: string;
          t: TFunction;
        }[];
      };
      user?: {
        id: number;
        name: string | null;
        email: string;
        t: TFunction;
      };
      creditFor?: string;
    };
  }) {
    // No-op
  }

  /**
   * Get all credits - returns unlimited credits for open-source
   */
  async getAllCredits(_args: { teamId?: number; userId?: number }) {
    return {
      totalRemainingMonthlyCredits: Number.MAX_SAFE_INTEGER,
      additionalCredits: Number.MAX_SAFE_INTEGER,
    } as const;
  }

  /**
   * Handle low credit balance - no-op for open-source
   */
  async handleLowCreditBalance(_args: {
    userId?: number;
    teamId?: number;
    remainingCredits: number;
    creditFor?: string;
  }) {
    // No-op - no alerts in open-source version
  }
}

export const stubCreditService = new StubCreditService();
export { StubCreditService as CreditService };

// Export type alias for backward compatibility
export type CreditCheckFn = StubCreditService["hasAvailableCredits"];
