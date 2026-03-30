export const INCREMENT_USAGE_JOB_ID = "increment-usage";
export const CANCEL_USAGE_INCREMENT_JOB_ID = "cancel-increment-usage";
export const RESCHEDULE_USAGE_INCREMENT_JOB_ID = "reschedule-increment-usage";

export const getIncrementUsageIdempotencyKey = (userId: number) => `increment-usage-${userId}`;
export const getIncrementUsageJobTag = (userId: number) => `increment-usage-tag-${userId}`;
