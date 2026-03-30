export const stubDueInvoiceService = {
  getDueInvoiceData() {
    return null;
  },
};

export class StubDueInvoiceService {
  async getDueInvoiceData() {
    return null;
  }
  async getBannerDataForUser(_userId: number) {
    return null;
  }
}
