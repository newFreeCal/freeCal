/**
 * Stub for open-source version
 * Always returns false - no SMS in OSS
 */
export async function alphanumericSenderIdSupport() {
  return false;
}

export function getSenderId(_phoneNumber?: string | null, _sender?: string | null) {
  return _sender || "freeCal";
}
