/**
 * Stub for open-source version
 * Always returns false - organization review is disabled in OSS
 */
export async function ensureOrganizationIsReviewed(_organizationId: number): Promise<boolean> {
  return false;
}
