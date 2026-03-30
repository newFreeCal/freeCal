import type { FORM_SUBMITTED_WEBHOOK_RESPONSES } from "@calcom/app-store/routing-forms/lib/formSubmissionUtils";
import { scheduleWorkflowReminders } from "@calcom/features/workflows/lib/stubs/scheduleWorkflowReminders";
import type { Workflow } from "@calcom/features/workflows/lib/stubs/types";
import { ZWorkflow } from "@calcom/features/workflows/lib/stubs/types";
import logger from "@calcom/lib/logger";
import type { WorkflowTriggerEvents } from "@calcom/prisma/enums";
import { z } from "zod";
import { shouldTriggerFormSubmittedNoEvent } from "./formSubmissionValidation";

const log = logger.getSubLogger({ prefix: ["[tasker] triggerFormSubmittedNoEventWorkflow"] });

export const ZTriggerFormSubmittedNoEventWorkflowPayloadSchema = z.object({
  responseId: z.number(),
  responses: z.record(z.unknown()),
  routedEventTypeId: z.number().nullable().optional(),
  form: z.object({
    id: z.string(),
    userId: z.number(),
    teamId: z.number().nullable().optional(),
    fields: z.array(z.object({ type: z.string(), identifier: z.string().optional() })).optional(),
    user: z.object({
      email: z.string(),
      timeFormat: z.number().nullable(),
      locale: z.string().nullable(),
    }),
  }),
  hideBranding: z.boolean(),
  smsReminderNumber: z.string().nullable(),
  workflow: ZWorkflow,
  submittedAt: z.coerce.date(),
});

export async function triggerFormSubmittedNoEventWorkflow(payload: string): Promise<void> {
  const {
    responseId,
    form,
    responses,
    smsReminderNumber,
    hideBranding,
    workflow,
    submittedAt,
    routedEventTypeId,
  } = ZTriggerFormSubmittedNoEventWorkflowPayloadSchema.parse(JSON.parse(payload));

  const shouldTrigger = await shouldTriggerFormSubmittedNoEvent({
    formId: form.id,
    responseId,
    responses: responses as FORM_SUBMITTED_WEBHOOK_RESPONSES,
    submittedAt,
  });

  if (!shouldTrigger) return;

  try {
    await scheduleWorkflowReminders({
      smsReminderNumber,
      formData: {
        responses: responses as FORM_SUBMITTED_WEBHOOK_RESPONSES,
        user: { email: form.user.email, timeFormat: form.user.timeFormat, locale: form.user.locale ?? "en" },
        routedEventTypeId: routedEventTypeId ?? null,
      },
      hideBranding,
      workflows: [workflow as Workflow],
      creditCheckFn: async () => true,
    });
  } catch (error) {
    log.error("Error while triggering form submitted no event workflows", JSON.stringify({ error }));
  }
}
