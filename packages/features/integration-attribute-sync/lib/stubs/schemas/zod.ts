/**
 * Stub schemas for open-source version
 */
import z from "zod";

export const createAttributeSyncSchema = z.object({});
export const updateAttributeSyncSchema = z.object({});
export type CreateAttributeSyncInput = z.infer<typeof createAttributeSyncSchema>;
export type UpdateAttributeSyncInput = z.infer<typeof updateAttributeSyncSchema>;
export const ZCreateAttributeSyncSchema = createAttributeSyncSchema;
export const attributeSyncRuleSchema = z.object({});
export const fieldMappingWithOptionalIdSchema = z.object({});
