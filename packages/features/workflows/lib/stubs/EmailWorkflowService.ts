/**
 * Stub EmailWorkflowService for open-source version
 */
export class EmailWorkflowService {
  constructor(_workflowReminderRepo?: any, _bookingSeatRepo?: any) {}

  async handleSendEmailWorkflowTask(_args: { evt: any; workflowReminderId: number }) {
    return null;
  }

  static async scheduleWorkflowReminders(_args: {
    workflowIds: number[];
    userId: number;
    teamId: number | null;
    triggerEvent: string;
    smsReminderNumber?: string;
    formData?: any;
    hideBranding?: boolean;
    workflows?: any[];
    creditCheckFn?: () => Promise<boolean>;
  }) {
    return null;
  }

  static async getAllWorkflowsFromEventType(_args: any) {
    return [];
  }
}
