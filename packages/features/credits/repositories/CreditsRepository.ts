import type { PrismaTransaction } from "@calcom/prisma";

/**
 * Stub CreditsRepository - All credit-based features are disabled in the open-source version
 * This is a no-op implementation that returns null/undefined for all operations
 */
export class StubCreditsRepository {
  static async findCreditBalance(_params: { teamId?: number; userId?: number }, _tx?: PrismaTransaction) {
    return null;
  }

  static async findCreditExpenseLogByExternalRef(_externalRef: string, _tx?: PrismaTransaction) {
    return null;
  }

  static async findCreditBalanceWithTeamOrUser(
    _params: { teamId?: number | null; userId?: number | null },
    _tx?: PrismaTransaction
  ) {
    return null;
  }

  static async findCreditBalanceWithExpenseLogs(
    _params: {
      teamId?: number;
      userId?: number;
      startDate?: Date;
      endDate?: Date;
      creditType?: unknown;
    },
    _tx?: PrismaTransaction
  ) {
    return null;
  }

  static async updateCreditBalance(
    _params: {
      id?: string;
      teamId?: number | null;
      userId?: number | null;
      data: unknown;
    },
    _tx?: PrismaTransaction
  ) {
    return null;
  }

  static async createCreditBalance(_data: unknown, _tx?: PrismaTransaction) {
    return null;
  }

  static async createCreditExpenseLog(_data: unknown, _tx?: PrismaTransaction) {
    return null;
  }

  static async createCreditPurchaseLog(_data: { credits: number; creditBalanceId: string }) {
    return null;
  }
}
