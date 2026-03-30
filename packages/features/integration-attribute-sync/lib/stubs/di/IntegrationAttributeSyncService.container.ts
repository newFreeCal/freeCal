/**
 * Stub IntegrationAttributeSyncService container for open-source version
 */
export function IntegrationAttributeSyncService(_container?: any) {
  return {
    token: Symbol("IntegrationAttributeSyncService"),
    loadModule: (_container: any) => {},
    getAllByCredentialId: async (credentialId: number): Promise<any[]> => {
      return [];
    },
    getEnabledAppCredentials: async (_organizationId: number): Promise<any[]> => {
      return [];
    },
    getAllIntegrationAttributeSyncs: async (_organizationId: number): Promise<any[]> => {
      return [];
    },
    shouldSyncApplyToUser: async (args: any): Promise<boolean> => {
      return true;
    },
  };
}

export function getIntegrationAttributeSyncService(_container?: any) {
  return IntegrationAttributeSyncService(_container);
}
