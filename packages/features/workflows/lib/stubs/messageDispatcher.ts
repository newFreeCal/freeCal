/**
 * Stub for open-source version
 * Always returns false - no SMS in OSS
 */
export async function sendSmsOrFallbackEmail(_twilioData?: {
  phoneNumber: string;
  body: string;
  sender?: string;
  teamId?: number;
  userId?: number;
  bookingUid?: string;
}) {
  return false;
}
