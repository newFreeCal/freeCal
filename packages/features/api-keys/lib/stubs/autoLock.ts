/**
 * Stub autoLock for open-source version
 */
export type LockReason = "suspicious_activity" | "manual" | "system";

export const autoLock = {
  checkAndLock: async (_args: any): Promise<void> => {},
  unlock: async (_args: any): Promise<void> => {},
};

export async function lockUser(_args: {
  userId: number;
  reason: LockReason;
}): Promise<void> {
  return;
}
