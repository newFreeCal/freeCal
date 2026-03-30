/**
 * Stub utils for workflow reminders in open-source version
 */

import type { WorkflowActions, WorkflowTriggerEvents } from "@calcom/prisma/enums";
import type { BookingInfo } from "../types";

export type AttendeeInBookingInfo = {
  email: string;
  firstName: string;
  lastName: string;
  name: string;
  timeZone: string;
  language?: { locale?: string };
};

export const bulkShortenLinks = async (_links: string[]): Promise<{ shortLink: string }[]> => {
  // No-op for OSS - return links as-is
  return _links.map((link) => ({ shortLink: link }));
};

export const getSMSMessageWithVariables = async (
  _smsMessage: string,
  _evt: BookingInfo,
  _attendeeToBeUsedInSMS: AttendeeInBookingInfo,
  _action: WorkflowActions
): Promise<string> => {
  // No-op for OSS - return message as-is
  return _smsMessage;
};

export const getAttendeeToBeUsedInSMS = (
  _action: WorkflowActions,
  _evt: BookingInfo,
  _reminderPhone: string | null
): AttendeeInBookingInfo | null => {
  // No-op for OSS - return null
  return null;
};

export const shouldUseTwilio = (_trigger: WorkflowTriggerEvents, _scheduledDate: any): boolean => {
  // No-op for OSS - return false
  return false;
};
