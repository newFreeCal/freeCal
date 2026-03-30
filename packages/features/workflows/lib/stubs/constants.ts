/**
 * Stub constants for open-source version
 */

// Use the enums from prisma
export type WorkflowTriggerEvents =
  | "BEFORE_EVENT"
  | "EVENT_CANCELLED"
  | "NEW_EVENT"
  | "AFTER_EVENT"
  | "RESCHEDULE_EVENT"
  | "FORM_SUBMITTED"
  | "FORM_SUBMITTED_NO_EVENT"
  | "BOOKING_REJECTED"
  | "BOOKING_REQUESTED"
  | "BOOKING_PAYMENT_INITIATED"
  | "BOOKING_PAID"
  | "BOOKING_NO_SHOW_UPDATED"
  | "AFTER_HOSTS_CAL_VIDEO_NO_SHOW"
  | "AFTER_GUESTS_CAL_VIDEO_NO_SHOW";
export type WorkflowActions =
  | "EMAIL_HOST"
  | "EMAIL_ATTENDEE"
  | "SMS_ATTENDEE"
  | "SMS_NUMBER"
  | "EMAIL_ADDRESS"
  | "WHATSAPP_ATTENDEE"
  | "WHATSAPP_NUMBER"
  | "CAL_AI_PHONE_CALL"
  | "SMS_HOST";
export type WorkflowTemplates =
  | "CUSTOM"
  | "REMINDER"
  | "RATING"
  | "CANCELLED"
  | "COMPLETED"
  | "RESCHEDULED"
  | "SCHEDULE"
  | "SCHEDULE_RESCHEDULED";

export const WORKFLOW_TRIGGER_EVENTS = [
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
] as const satisfies WorkflowTriggerEvents[];

export const WORKFLOW_ACTIONS = [
  "EMAIL_HOST",
  "EMAIL_ATTENDEE",
  "SMS_ATTENDEE",
  "SMS_NUMBER",
  "EMAIL_ADDRESS",
  "WHATSAPP_ATTENDEE",
  "WHATSAPP_NUMBER",
  "CAL_AI_PHONE_CALL",
  "SMS_HOST",
] as const;

export type TimeUnit = "DAY" | "HOUR" | "MINUTE";
export const TIME_UNIT = ["DAY", "HOUR", "MINUTE"] as const;

export const WORKFLOW_TEMPLATES = [
  "CUSTOM",
  "REMINDER",
  "RATING",
  "CANCELLED",
  "COMPLETED",
  "RESCHEDULED",
  "SCHEDULE",
  "SCHEDULE_RESCHEDULED",
] as const satisfies WorkflowTemplates[];

export const BASIC_WORKFLOW_TEMPLATES: WorkflowTemplates[] = ["CUSTOM", "REMINDER"] as const;

export const ATTENDEE_WORKFLOW_TEMPLATES: WorkflowTemplates[] = ["CUSTOM", "REMINDER", "RATING"] as const;

export const DYNAMIC_TEXT_VARIABLES = [
  "event_name",
  "event_date",
  "event_time",
  "event_end_time",
  "timezone",
  "location",
  "organizer_name",
  "attendee_name",
  "attendee_first_name",
  "attendee_last_name",
  "attendee_email",
  "additional_notes",
  "meeting_url",
  "cancel_url",
  "cancel_reason",
  "reschedule_url",
  "reschedule_reason",
  "rating_url",
  "no_show_url",
  "attendee_timezone",
  "event_start_time_in_attendee_timezone",
  "event_end_time_in_attendee_timezone",
];

export const FORMATTED_DYNAMIC_TEXT_VARIABLES = [
  "event_date_",
  "event_time_",
  "event_end_time_",
  "event_start_time_in_attendee_timezone_",
  "event_end_time_in_attendee_timezone_",
];

export const IMMEDIATE_WORKFLOW_TRIGGER_EVENTS: WorkflowTriggerEvents[] = [
  "NEW_EVENT",
  "EVENT_CANCELLED",
  "RESCHEDULE_EVENT",
  "BOOKING_NO_SHOW_UPDATED",
  "BOOKING_PAID",
  "BOOKING_REQUESTED",
  "FORM_SUBMITTED",
  "FORM_SUBMITTED_NO_EVENT",
];

export const FORM_TRIGGER_WORKFLOW_EVENTS: WorkflowTriggerEvents[] = [
  "FORM_SUBMITTED",
  "FORM_SUBMITTED_NO_EVENT",
];

export const ALLOWED_FORM_WORKFLOW_ACTIONS: (typeof WORKFLOW_ACTIONS)[number][] = [
  "EMAIL_ATTENDEE",
  "EMAIL_ADDRESS",
] as const;
