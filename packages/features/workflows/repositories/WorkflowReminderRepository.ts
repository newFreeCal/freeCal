/**
 * Stub WorkflowReminderRepository for open-source version
 */
export class WorkflowReminderRepository {
  async findUnique(_args: { where: { id: number } }) {
    return null;
  }

  async findMany(_args: { where?: { workflowId?: number } }) {
    return [];
  }

  async create(_args: { data: any }) {
    return null;
  }
}
