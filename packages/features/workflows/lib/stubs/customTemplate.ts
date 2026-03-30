/**
 * Stub customTemplate for open-source version
 */

export function getVariableFormats(key: string): string[] {
  return [formatIdentifierToVariable(key)];
}

function formatIdentifierToVariable(key: string): string {
  return key.replace(/[-_](\w)/g, (_, char) => char.toUpperCase());
}

function formatIdentifierToVariableLegacy(key: string): string {
  return key.replace(/[-](\w)/g, (_, char) => char.toUpperCase());
}

export default {
  customTemplate: () => null,
};
