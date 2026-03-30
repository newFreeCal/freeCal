/**
 * Stub DueInvoiceService for open-source version
 * Provides no-op implementation that returns null
 */

export class StubDueInvoiceService {
  async getDueInvoiceDataForBanner(_teamId: number) {
    return null;
  }

  async getBannerDataForUser(_userId: number) {
    return null;
  }
}

export const stubDueInvoiceService = new StubDueInvoiceService();
export default StubDueInvoiceService;
