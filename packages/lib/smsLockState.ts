import type { RateLimitHelper } from "./rateLimit";

/**
 * Stub SMS rate limiting - all SMS features are disabled in the open-source version
 * This is a no-op implementation
 */
export async function checkSMSRateLimit(_params: RateLimitHelper) {
  // No-op - SMS rate limiting is disabled
  return { success: true };
}

async function changeSMSLockState(_identifier: string, _status: unknown) {
  // No-op - SMS lock state is disabled
}
