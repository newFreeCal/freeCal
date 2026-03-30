import { createOrganizationSchema } from "@calcom/features/organizations/lib/stubs/types/schemas";
import type { z } from "zod";

export const ZCreateSelfHostedInputSchema = createOrganizationSchema;

export type TCreateSelfHostedInputSchema = z.infer<typeof ZCreateSelfHostedInputSchema>;
