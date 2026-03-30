/**
 * Stub for open-source version
 * Round-robin reassignment is an enterprise feature
 */

export const roundRobinReassignment = async ({
  bookingId,
  orgId,
  emailsEnabled = true,
  platformClientParams,
  reassignedById,
  actionSource,
  reassignedByUuid,
}: {
  bookingId: number;
  orgId?: number | null;
  emailsEnabled?: boolean;
  platformClientParams?: {
    userId: number;
    impersonatorId?: number;
  };
  reassignedById?: number;
  actionSource?: string;
  reassignedByUuid?: string;
}) => {
  return null;
};
