/**
 * Stub scheduleWorkflowReminders for open-source version
 * No-op - workflow reminders are disabled in open-source version
 */

export async function scheduleWorkflowReminders(_args: any): Promise<void> {
  // No-op for open-source - workflow reminders disabled
  console.log("[scheduleWorkflowReminders] Skipping workflow reminders (OSS)");
}

export async function sendCancelledReminders(_args: {
  workflows?: any[];
  smsReminderNumber?: string;
  evt?: any;
  hideBranding?: boolean;
  creditCheckFn?: () => Promise<boolean>;
  workflowId?: number;
  bookingId?: number;
}): Promise<void> {
  // No-op for open-source - workflow reminders disabled
  console.log("[sendCancelledReminders] Skipping cancelled reminder (OSS)");
}

export type ExtendedCalendarEvent = any;
