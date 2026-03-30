/**
 * Stub DeploymentRepository for open-source version
 * No license key validation in OSS
 */

export class DeploymentRepository {
  async getLicenseKeyWithId(_id: number): Promise<string | null> {
    return null;
  }

  async getSignatureToken(_id: number): Promise<string | null> {
    return null;
  }
}
