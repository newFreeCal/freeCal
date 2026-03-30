export class StubPlatformOrganizationBillingTasker {
  static async schedule(_orgId: number, _periodStart: Date, _periodEnd: Date) {}
  static async cancel(_orgId: number, _periodStart: Date, _periodEnd: Date) {}
  static async reschedule(_orgId: number, _periodStart: Date, _periodEnd: Date) {}
}
