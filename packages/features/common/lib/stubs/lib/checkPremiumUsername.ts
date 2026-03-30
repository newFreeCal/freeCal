/**
 * Stub checkPremiumUsername for open-source version
 */
export async function checkPremiumUsername(_username: string): Promise<{ available: boolean; suggestion?: string }> {
  return { available: false, suggestion: undefined };
}
