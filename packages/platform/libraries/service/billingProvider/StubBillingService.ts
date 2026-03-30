export const stubBillingService = {
  getBillingProvider() {
    return null;
  },
};

export class StubBillingService {
  async getBillingProvider() {
    return null;
  }
}
