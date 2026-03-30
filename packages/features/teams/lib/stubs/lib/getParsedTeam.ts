/**
 * Stub for open-source version
 */
export function getParsedTeam<T extends { metadata?: any }>(team: T) {
  const metadata = team.metadata ?? {};
  const requestedSlug = metadata?.requestedSlug ?? null;
  const { metadata: _1, ...rest } = team;
  return {
    ...rest,
    requestedSlug,
    metadata: {
      ...metadata,
      requestedSlug,
    },
  };
}
