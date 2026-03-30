/**
 * Stub DeploymentRepository for open-source version
 */
export class DeploymentRepository {
  constructor(_prisma?: any) {}

  async findUnique(_args: { where: { id: number } }) {
    return null;
  }

  async findFirst(_args: { where: { key: string } }) {
    return null;
  }

  async create(_args: { data: any }) {
    return null;
  }

  async update(_args: { where: { id: number }; data: any }) {
    return null;
  }

  async getLicenseKeyWithId(_id: number): Promise<string | null> {
    return null;
  }

  async getSignatureToken(_id: number): Promise<string | null> {
    return null;
  }
}
