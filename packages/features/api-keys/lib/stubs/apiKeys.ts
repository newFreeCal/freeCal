/**
 * Stub apiKeys for open-source version
 */
export const apiKeys = {
  hashAPIKey: (key: string) => `hashed_${key}`,
  generateAPIKey: () => `fake-api-key-${Math.random().toString(36).substring(7)}`,
  validateAPIKey: () => true,
  generateUniqueAPIKey: () => ["hashed-key", "api-key"],
};

export const hashAPIKey = (key: string) => `hashed_${key}`;
export const generateAPIKey = () => `fake-api-key-${Math.random().toString(36).substring(7)}`;
export const validateAPIKey = () => true;
export const generateUniqueAPIKey = () => ["hashed-key", "api-key"];
