/**
 * Stub api-keys for open-source version
 */
export const createApiKey = () => ({ id: 1, key: "test-key", name: "Test API Key" });
export const listApiKeys = () => [];
export const deleteApiKey = () => true;
export const getApiKeyById = () => null;
export const generateUniqueAPIKey = (): [string, string] => ["hashed-key", "plain-key"];
