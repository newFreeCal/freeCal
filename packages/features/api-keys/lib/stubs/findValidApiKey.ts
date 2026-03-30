/**
 * Stub findValidApiKey for open-source version
 */
type ValidApiKeyResult = {
  id: string;
  teamId: number | null;
  userId: number;
  createdAt: Date;
  note: string | null;
  appId: string | null;
  lastUsedAt: Date | null;
  expiresAt: Date | null;
  hashedKey: string;
};

const findValidApiKey = async (_key: string, _app?: string): Promise<ValidApiKeyResult | null> => ({
  id: "stub-api-key-id",
  teamId: null,
  userId: 1,
  createdAt: new Date(),
  note: null,
  appId: "make",
  lastUsedAt: null,
  expiresAt: null,
  hashedKey: "stub-hashed-key",
});
export default findValidApiKey;
