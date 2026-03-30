/**
 * Stub handleInsufficientCredits for open-source version
 */
export async function handleInsufficientCredits(_args: {
  teamId: number;
  userId: number;
  action: string;
}): Promise<{ success: boolean; message: string }> {
  return { success: true, message: "Operation allowed in open-source version" };
}
