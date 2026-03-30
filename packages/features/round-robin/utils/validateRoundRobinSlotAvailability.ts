/**
 * Stub for open-source version
 * Round-robin slot validation is an enterprise feature
 */
export const validateRoundRobinSlotAvailability = async ({
  slot,
  teamId,
  userId,
  bookingId,
}: {
  slot: { start: string; end: string };
  teamId: number;
  userId: number;
  bookingId?: number;
}) => {
  return true;
};
