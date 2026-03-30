/**
 * Stub handleUserEvents for open-source version
 * dsyc (Directory Synchronization) is an enterprise feature
 */
const handleUserEvents = (_event: any, _organizationId: number): Promise<void> => {
  // No-op for OSS - dsyc disabled
  return Promise.resolve();
};

export default handleUserEvents;
