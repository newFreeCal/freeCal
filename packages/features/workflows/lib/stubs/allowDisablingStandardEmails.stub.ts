/**
 * Stub for open-source version
 * Always returns true - email disabling is allowed in OSS
 */
export function allowDisablingStandardEmails() {
  return true;
}

export function allowDisablingAttendeeConfirmationEmails(_workflows: any[]) {
  return false;
}

export function allowDisablingHostConfirmationEmails(_workflows: any[]) {
  return false;
}
