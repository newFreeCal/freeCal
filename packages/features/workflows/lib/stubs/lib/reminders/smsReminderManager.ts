/**
 * Stub smsReminderManager for open-source version
 */

import type { CreditCheckFn } from "@calcom/features/billing/lib/stubs/service/StubCreditService";
import type {
  TimeUnit,
  WorkflowActions,
  WorkflowTemplates,
  WorkflowTriggerEvents,
} from "@calcom/prisma/enums";

export type ScheduleTextReminderAction =
  | "SMS_ATTENDEE"
  | "SMS_NUMBER"
  | "SMS_HOST"
  | "WHATSAPP_ATTENDEE"
  | "WHATSAPP_NUMBER";

export type timeUnitLowerCase = "second" | "minute" | "hour" | "day" | "week" | "month" | "year";

export type BookingInfo = {
  uid?: string | null;
  bookerUrl: string;
  attendees: AttendeeInBookingInfo[];
  organizer: {
    language: { locale: string };
    name: string;
    email: string;
    timeZone: string;
  };
  startTime: string;
  endTime: string;
  title: string;
  location?: string | null;
};

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

export const scheduleSMSReminder = async (_args: {
  triggerEvent: WorkflowTriggerEvents;
  timeSpan: {
    time: number | null;
    timeUnit: TimeUnit | null;
  };
  reminderPhone: string;
  message: string;
  action: ScheduleTextReminderAction;
  verifiedAt: Date | null;
  creditCheckFn: CreditCheckFn;
  evt?: BookingInfo;
  formData?: FormSubmissionData;
  template?: WorkflowTemplates;
  sender?: string | null;
  userId?: number | null;
  teamId?: number | null;
  isVerificationPending?: boolean;
  seatReferenceUid?: string;
}): Promise<void> => {
  // No-op for OSS - workflows disabled
};

export const scheduleWhatsappReminder = async (_args: {
  triggerEvent: WorkflowTriggerEvents;
  timeSpan: {
    time: number | null;
    timeUnit: TimeUnit | null;
  };
  reminderPhone: string;
  message: string;
  action: ScheduleTextReminderAction;
  verifiedAt: Date | null;
  creditCheckFn: CreditCheckFn;
  evt: BookingInfo;
  template?: WorkflowTemplates;
  sender?: string | null;
  userId?: number | null;
  teamId?: number | null;
  isVerificationPending?: boolean;
  seatReferenceUid?: string;
}): Promise<void> => {
  // No-op for OSS - workflows disabled
};

export const deleteScheduledSMSReminder = async (
  _reminderId: number,
  _referenceId: string | null
): Promise<void> => {
  // No-op for OSS - workflows disabled
};

export const deleteScheduledWhatsappReminder = async (
  _reminderId: number,
  _referenceId: string | null
): Promise<void> => {
  // No-op for OSS - workflows disabled
};

export const verifyPhoneNumber = async (_phoneNumber: string): Promise<void> => {
  // No-op for OSS - workflows disabled
};
