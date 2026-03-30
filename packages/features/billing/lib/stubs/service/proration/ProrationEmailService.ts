/**
 * Stub ProrationEmailService for open-source version
 */
export class ProrationEmailService {
  async sendProrationEmail(_args: {
    teamId: number;
    userId: number;
    prorationDetails: any;
  }): Promise<{ success: boolean }> {
    return { success: true };
  }

  async sendInvoiceEmail(_args: {
    prorationId: number;
    teamId: number;
    isAutoCharge?: boolean;
  }): Promise<void> {
    return;
  }

  async sendReminderEmail(_args: {
    prorationId: number;
    teamId: number;
  }): Promise<void> {
    return;
  }
}
