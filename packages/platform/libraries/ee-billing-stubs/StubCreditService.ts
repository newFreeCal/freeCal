export class StubCreditService {
  async hasAvailableCredits(_args: { userId?: number; credits?: number; teamId?: number }): Promise<boolean> {
    return true;
  }
}

export const stubCreditService = new StubCreditService();
