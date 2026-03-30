/**
 * Stub PrismaApiKeyRepository for open-source version
 */
import prisma from "@calcom/prisma";

export class PrismaApiKeyRepository {
  constructor(_prisma?: any) {}

  static async withGlobalPrisma() {
    return new PrismaApiKeyRepository(prisma);
  }

  async createApiKey(_args: {
    userId: number;
    teamId?: number;
    expiresAt: Date | null;
    note?: string;
  }): Promise<{ id: number; key: string }> {
    return { id: 1, key: "stub-api-key-123" };
  }

  async findApiKeysFromUserId(_args: { userId: number }): Promise<any[]> {
    return [];
  }

  create(_args: any): Promise<any> {
    return Promise.resolve(null);
  }

  findMany(_args?: any): Promise<any[]> {
    return Promise.resolve([]);
  }

  findOne(_args: any): Promise<any> {
    return Promise.resolve(null);
  }

  update(_args: any): Promise<any> {
    return Promise.resolve(null);
  }

  delete(_args: any): Promise<any> {
    return Promise.resolve(null);
  }
}
