import type { TGetVerifiedNumbersInputSchema } from "@calcom/features/workflows/lib/stubs/WorkflowRepository";
import { z } from "zod";

export const ZGetVerifiedNumbersInputSchema: z.ZodType<TGetVerifiedNumbersInputSchema> = z.object({
  teamId: z.number().optional(),
});

export type { TGetVerifiedNumbersInputSchema };
