/**
 * Stub for open-source version
 * Round-robin manual reassignment is an enterprise feature
 */

export const roundRobinManualReassignment = async ({
  bookingId,
  newUserId,
  reassignToUserId = newUserId,
  orgId,
  reassignReason,
  reassignedById,
  actionSource,
  reassignedByUuid,
}: {
  bookingId: number;
  newUserId: number;
  reassignToUserId?: number;
  orgId?: number | null;
  reassignReason?: string;
  reassignedById: number;
  actionSource?: string;
  reassignedByUuid?: string;
}) => {
  return null;
};

export const handleWorkflowsUpdate = () => {
  // No-op stub
};
