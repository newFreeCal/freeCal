/**
 * Stub AttributeSyncRuleService container for open-source version
 */
export function AttributeSyncRuleService(_container?: any) {
  return {
    token: Symbol("AttributeSyncRuleService"),
    loadModule: (_container: any) => {},
    shouldSyncApplyToUser: async (args: any): Promise<boolean> => {
      return true;
    },
  };
}

// Stub for compatibility - open-source version
export function getAttributeSyncRuleService() {
  return AttributeSyncRuleService();
}
