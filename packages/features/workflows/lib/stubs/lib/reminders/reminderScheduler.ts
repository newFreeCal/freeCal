/**
 * Stub reminderScheduler for open-source version
 * All workflow reminder scheduling is disabled in OSS
 */

import type { CreditCheckFn } from "@calcom/features/billing/lib/stubs/service/StubCreditService";
import type { Workflow, WorkflowStep } from "@calcom/features/workflows/lib/stubs/types";
import type { WorkflowActions } from "@calcom/prisma/enums";
import type { CalendarEvent } from "@calcom/types/Calendar";

// Define types inline since stub types.ts doesn't export them
export type AttendeeInBookingInfo = {
  name: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phoneNumber?: string | null;
  timeZone: string;
  language: { locale: string };
};

export type FormSubmissionData = {
  responses: any;
  routedEventTypeId: number | null;
  user: {
    email: string;
    timeFormat: number | null;
    locale: string;
  };
};

export type BookingInfo = {
  uid?: string | null;
  bookerUrl: string;
  attendees: AttendeeInBookingInfo[];
  organizer: {
    language: { locale: string };
    name: string;
    email: string;
    timeZone: string;
    timeFormat?: any;
    username?: string;
  };
  eventType?: {
    slug: string;
    recurringEvent?: any | null;
    customReplyToEmail?: string | null;
  };
  startTime: string;
  endTime: string;
  title: string;
  location?: string | null;
  additionalNotes?: string | null;
  responses?: any | null;
  metadata?: any;
  cancellationReason?: string | null;
  rescheduleReason?: string | null;
  hideOrganizerEmail?: boolean;
  videoCallData?: {
    url?: string;
  };
  platformClientId?: string | null;
};

export type ExtendedCalendarEvent = Omit<CalendarEvent, "bookerUrl"> & {
  metadata?: { videoCallUrl: string | undefined };
  eventType: {
    slug: string;
    schedulingType?: any;
    hosts?: { user: { email: string } }[];
  };
  bookerUrl: string;
};

export type ProcessWorkflowStepParams = (
  | { calendarEvent: ExtendedCalendarEvent; formData?: never }
  | {
      calendarEvent?: never;
      formData: FormSubmissionData;
    }
) & {
  smsReminderNumber: string | null;
  emailAttendeeSendToOverride?: string;
  hideBranding?: boolean;
  seatReferenceUid?: string;
};

export type ScheduleWorkflowRemindersArgs = ProcessWorkflowStepParams & {
  workflows: Workflow[];
  isDryRun?: boolean;
  creditCheckFn: CreditCheckFn;
};

export const scheduleWorkflowsFilteredByTriggerEvent = async (_args: {
  workflows: Workflow[];
  eventType: any;
  user: any;
  triggerEvent: any;
}): Promise<void> => {
  // No-op for OSS - workflows disabled
};

export const scheduleWorkflowReminders = async (_args: ScheduleWorkflowRemindersArgs): Promise<void> => {
  // No-op for OSS - workflows disabled
};

export const scheduleMandatoryReminder = async (_args: {
  evt: any;
  workflows: any[];
  requiresConfirmation: boolean;
  hideBranding: boolean;
  seatReferenceUid: string | undefined;
  isPlatformNoEmail?: boolean;
  isDryRun?: boolean;
  traceContext: any;
}): Promise<void> => {
  // No-op for OSS - mandatory reminders disabled
};

export const scheduleWorkflowsForNewBooking = async (_args: {
  evt: BookingInfo;
  workflows: Workflow[];
}): Promise<void> => {
  // No-op for OSS - workflows disabled
};

export const scheduleWorkflowsForRescheduledBooking = async (_args: {
  evt: BookingInfo;
  workflows: Workflow[];
}): Promise<void> => {
  // No-op for OSS - workflows disabled
};

export const scheduleWorkflowsForCancelledBooking = async (_args: {
  evt: BookingInfo;
  workflows: Workflow[];
}): Promise<void> => {
  // No-op for OSS - workflows disabled
};

export const deleteAllWorkflowReminders = async (_workflowIds: number[]): Promise<void> => {
  // No-op for OSS - workflows disabled
};

export const sendCancelledReminders = async (_args: any): Promise<void> => {
  // No-op for OSS - workflows disabled
};

export const scheduleLazyEmailWorkflow = async (_args: any): Promise<void> => {
  // No-op for OSS - workflows disabled
};

export const scheduleFormWorkflows = async (_args: any): Promise<void> => {
  // No-op for OSS - workflows disabled
};

export const getReminderPhoneNumber = async (
  _action: any,
  _seatReferenceUid: string | undefined,
  _smsReminderNumber: string | null,
  _stepSendTo: string | null
): Promise<string | null> => {
  return null;
};

export const processWorkflowStep = async (
  _workflow: Workflow,
  _step: WorkflowStep,
  _params: ProcessWorkflowStepParams,
  _creditCheckFn: CreditCheckFn
): Promise<void> => {
  // No-op for OSS - workflows disabled
};
