/**
 * Stub verifyPhoneNumber for open-source version
 */
export async function sendVerificationCode(_phoneNumber: string): Promise<{ success: boolean }> {
  return { success: true };
}

export async function verifyPhoneNumber(_args: {
  phoneNumber: string;
  userId: number;
}): Promise<{ success: boolean; error?: string }> {
  return { success: true };
}
