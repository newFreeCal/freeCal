/**
 * Stub PrismaApiKeyRepository for open-source version
 */
export class PrismaApiKeyRepository {
  constructor(_prisma?: any) {}

  async findUnique(_args: { where: { id: number } }) {
    return null;
  }

  async findFirst(_args: { where: { key: string } }) {
    return null;
  }

  async findMany(_args: { where: { userId: number } }) {
    return [];
  }

  async findApiKeysFromUserId(_args: { userId: number }) {
    return [];
  }

  async create(_args: { data: any }) {
    return null;
  }

  async delete(_args: { where: { id: number } }) {
    return null;
  }

  async createApiKey(_args: { userId: number; teamId?: number; expiresAt: Date | null; note: string }) {
    return "test-api-key-string-for-oss";
  }

  static withGlobalPrisma() {
    return new PrismaApiKeyRepository();
  }
}

export function findValidApiKey(_apiKey?: string, _app?: string): Promise<any | null> {
  return Promise.resolve(null);
}

export const LockReason = {
  RATE_LIMIT: "RATE_LIMIT",
  SUSPICIOUS: "SUSPICIOUS",
  MALICIOUS_URL_IN_WORKFLOW: "MALICIOUS_URL_IN_WORKFLOW",
};

export const lockUser = (_userIdOrTeamId: string, _identifier: string, _reason?: string): null => null;

export const autoLock = {
  shouldLockApiKey: () => false,
  incrementLockCount: () => null,
  resetLockCount: () => null,
};
