/**
 * Stub userCanCreateTeamGroupMapping for open-source version
 */
export const userCanCreateTeamGroupMapping = (
  _user?: any,
  _orgId?: number | null,
  _teamId?: number | null
) => ({
  organizationId: (_orgId ?? 0) as number,
});
export default userCanCreateTeamGroupMapping;
