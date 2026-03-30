/**
 * Stub fieldMappingHelpers for open-source version
 */
export const getDefaultFieldMapping = (_args?: any): any => {
  return {
    mappings: [],
  };
};

export const fieldMappingHelpers = {
  mapFields: (_args: any): any => ({}),
  getFieldType: (_args: any): string => "string",
  validateFieldValue: (_args: any): boolean => true,
};
