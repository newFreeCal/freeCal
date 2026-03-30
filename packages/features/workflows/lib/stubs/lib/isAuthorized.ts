/**
 * Stub isAuthorized for open-source version
 * Always returns true for all permissions
 */
type WorkflowPermission = "workflow.read" | "workflow.update" | "workflow.delete";
export function isAuthorized(
  _workflow: { userId?: number | null },
  _userId: number,
  _permission?: WorkflowPermission
) {
  return true;
}
