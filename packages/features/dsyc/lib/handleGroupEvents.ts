/**
 * Stub handleGroupEvents for open-source version
 * dsyc (Directory Synchronization) is an enterprise feature
 */
const handleGroupEvents = (_event: any, _organizationId: number): Promise<void> => {
  // No-op for OSS - dsyc disabled
  return Promise.resolve();
};

export default handleGroupEvents;
