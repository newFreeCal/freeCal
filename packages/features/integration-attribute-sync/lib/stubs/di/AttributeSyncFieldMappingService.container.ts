/**
 * Stub AttributeSyncFieldMappingService container for open-source version
 */
export function AttributeSyncFieldMappingService(_container?: any) {
  return {
    token: Symbol("AttributeSyncFieldMappingService"),
    loadModule: (_container: any) => {},
    syncIntegrationFieldsToAttributes: async (args: any): Promise<void> => {
      return;
    },
  };
}

// Stub for compatibility - open-source version
export function getAttributeSyncFieldMappingService() {
  return AttributeSyncFieldMappingService();
}
