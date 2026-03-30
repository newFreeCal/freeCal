export const stubBillingPeriodService = {
  getBillingPeriod() {
    return { start: new Date(), end: new Date() };
  },
};

export class StubBillingPeriodService {
  async getBillingPeriod() {
    return { start: new Date(), end: new Date() };
  }
}
