/**
 * Types for open-source version
 * Simplified types without SMS-specific fields
 */

import z from "zod";
import type { TIME_UNIT, WORKFLOW_ACTIONS, WORKFLOW_TEMPLATES, WORKFLOW_TRIGGER_EVENTS } from "./constants";

export type Workflow = {
  id: number;
  name: string;
  trigger: (typeof WORKFLOW_TRIGGER_EVENTS)[number];
  time: number | null;
  timeUnit: (typeof TIME_UNIT)[number] | null;
  userId: number | null;
  teamId: number | null;
  position?: number;
  isActiveOnAll?: boolean;
  type?: "EVENT_TYPE" | "ROUTING_FORM";
  steps: WorkflowStep[];
};

export type WorkflowStep = {
  action: (typeof WORKFLOW_ACTIONS)[number];
  sendTo: string | null;
  template: (typeof WORKFLOW_TEMPLATES)[number];
  reminderBody: string | null;
  emailSubject: string | null;
  id: number;
  sender: string | null;
  stepNumber?: number;
  senderName?: string | null;
  includeCalendarEvent: boolean;
  numberRequired?: boolean | null;
  numberVerificationPending?: boolean;
  verifiedAt?: Date | null;
  agentId?: string | null;
  inboundAgentId?: string | null;
};

export const ZWorkflow: z.ZodType<Workflow> = z.object({
  id: z.number(),
  name: z.string(),
  trigger: z.enum([
    "BEFORE_EVENT",
    "EVENT_CANCELLED",
    "NEW_EVENT",
    "AFTER_EVENT",
    "RESCHEDULE_EVENT",
    "FORM_SUBMITTED",
    "FORM_SUBMITTED_NO_EVENT",
    "BOOKING_REJECTED",
    "BOOKING_REQUESTED",
    "BOOKING_PAYMENT_INITIATED",
    "BOOKING_PAID",
    "BOOKING_NO_SHOW_UPDATED",
    "AFTER_HOSTS_CAL_VIDEO_NO_SHOW",
    "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
  ]),
  time: z.number().nullable(),
  timeUnit: z.enum(["DAY", "HOUR", "MINUTE"]).nullable(),
  userId: z.number().nullable(),
  teamId: z.number().nullable(),
  position: z.number().optional(),
  isActiveOnAll: z.boolean().optional(),
  type: z.enum(["EVENT_TYPE", "ROUTING_FORM"]).optional(),
  steps: z
    .object({
      id: z.number(),
      action: z.enum([
        "EMAIL_HOST",
        "EMAIL_ATTENDEE",
        "SMS_ATTENDEE",
        "SMS_NUMBER",
        "EMAIL_ADDRESS",
        "WHATSAPP_ATTENDEE",
        "WHATSAPP_NUMBER",
        "CAL_AI_PHONE_CALL",
        "SMS_HOST",
      ]),
      sendTo: z.string().nullable(),
      template: z.enum([
        "CUSTOM",
        "REMINDER",
        "RATING",
        "CANCELLED",
        "COMPLETED",
        "RESCHEDULED",
        "SCHEDULE",
        "SCHEDULE_RESCHEDULED",
      ]),
      reminderBody: z.string().nullable(),
      emailSubject: z.string().nullable(),
      sender: z.string().nullable(),
      senderName: z.string().nullable(),
      includeCalendarEvent: z.boolean(),
      numberRequired: z.boolean().nullable(),
      stepNumber: z.number().int(),
      numberVerificationPending: z.boolean(),
      verifiedAt: z.coerce.date().nullable(),
      agentId: z.string().nullable(),
      inboundAgentId: z.string().nullable(),
    })
    .array(),
});

export type WorkflowListType = Workflow;
export type WorkflowStepType = WorkflowStep;

export type CallDetailsAction =
  | { type: "OPEN_CALL_DETAILS"; payload: { showModal: boolean; selectedCall?: any } }
  | { type: "CLOSE_MODAL" };

export type CallDetailsState = {
  callDetailsSheet: { showModal: boolean; selectedCall?: any };
};
