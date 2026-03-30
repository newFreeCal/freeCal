/**
 * Stub emailProvider for open-source version
 * All email sending is no-op in OSS
 */

export async function sendOrScheduleWorkflowEmails(_mailData: any) {
  // No-op for OSS - workflows disabled
}
