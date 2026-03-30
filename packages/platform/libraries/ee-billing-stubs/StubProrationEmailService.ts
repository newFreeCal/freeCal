/**
 * Stub ProrationEmailService for open-source version
 * No-op - proration emails are disabled in OSS
 */

export class StubProrationEmailService {
  async sendInvoiceEmail(_args: { prorationId: string; teamId: number; isAutoCharge: boolean }) {}
  async sendReminderEmail(_args: { prorationId: string; teamId: number }) {}
}

export const stubProrationEmailService = new StubProrationEmailService();

export default StubProrationEmailService;
