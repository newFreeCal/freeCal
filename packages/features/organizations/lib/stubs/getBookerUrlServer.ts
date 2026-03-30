/**
 * Stub getBookerUrlServer for open-source version
 */
export async function getBookerUrlServer(
  _teamOrOrgId: { slug?: string | null } | number | null,
  _org?: { slug?: string | null }
) {
  // In open-source, org domains are simplified
  // Accept either slug object or orgId (number) for compatibility
  return "";
}

export const getBookerBaseUrl = getBookerUrlServer;
