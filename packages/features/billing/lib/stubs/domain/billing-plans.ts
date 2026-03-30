/**
 * Stub for open-source version
 * Billing plan management is disabled in OSS
 */

export function isBillingPlanFeatureEnabled(): boolean {
  return false;
}

export function canUserUpgradePlan(_userId: number): boolean {
  return false;
}

export async function getAvailablePlans(): Promise<never[]> {
  return [];
}

export async function getPlanDetails(_planId: string): Promise<never | null> {
  return null;
}

export async function getTeamPlanUsage(_teamId: number): Promise<never> {
  throw new Error("getTeamPlanUsage not implemented in OSS stub");
}
