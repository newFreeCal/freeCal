/**
 * Stub stubWorkflowRepository for open-source version
 */
export class StubWorkflowRepository {
  async findUnique(_args: { where: { id: number } }) {
    return null;
  }

  async findFirst(_args: { where: { eventTypeIds: number[] } }) {
    return null;
  }

  async findMany(_args: { where?: { userId?: number; teamId?: number } }) {
    return [];
  }

  async create(_args: { data: any }) {
    return null;
  }

  async update(_args: { where: { id: number }; data: any }) {
    return null;
  }

  async delete(_args: { where: { id: number } }) {
    return null;
  }
}
