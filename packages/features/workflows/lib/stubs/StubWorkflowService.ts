/**
 * Stub WorkflowService for open-source version
 * Provides no-op implementation that returns empty arrays/null
 */

import type { TimeUnit, WorkflowTriggerEvents } from "@calcom/prisma/enums";
import type { CalendarEvent } from "@calcom/types/Calendar";

export class StubWorkflowService {
  static async sendOrScheduleWorkflowStep(_args: {
    workflowStep: {
      id: number;
      action: string;
      workflowId: number;
      sender: string | null;
    };
    evt?: {
      id: number;
      uid: string;
      userId: number;
      startTime: string;
    };
  }) {
    return null;
  }

  static async getAllWorkflowsFromRoutingForm(_routingForm: any, _options?: any) {
    return [];
  }

  static async scheduleFormWorkflows(_args: {
    workflows?: any;
    responseId?: number;
    responses?: any;
    routedEventTypeId?: number | null;
    creditCheckFn?: any;
    form?: any;
  }) {
    return [];
  }

  static async scheduleWorkflowsFilteredByTriggerEvent(_args: any, _options?: any) {
    return [];
  }

  static async scheduleWorkflowsForNewBooking(_args: {
    workflows?: any[];
    smsReminderNumber?: string | null;
    calendarEvent?: any;
    hideBranding?: boolean;
    seatReferenceUid?: string;
    emailAttendeeSendToOverride?: string;
    isDryRun?: boolean;
    isConfirmedByDefault?: boolean;
    isNormalBookingOrFirstRecurringSlot?: boolean;
    isRescheduleEvent?: boolean;
    creditCheckFn?: any;
  }) {
    return [];
  }

  static async scheduleWorkflowsForRescheduledBooking(_args: any) {
    return null;
  }

  static async scheduleWorkflowsForCancelledBooking(_args: any) {
    return null;
  }

  static async getAllWorkflowsByEventType(_eventTypeIds: number[], _options?: any) {
    return [];
  }

  static async deleteAllWorkflowReminders(_args: { where: { bookingId: number } }) {
    return null;
  }

  static processWorkflowScheduledDate({
    workflowTriggerEvent,
    time,
    timeUnit,
    evt,
  }: {
    workflowTriggerEvent: WorkflowTriggerEvents;
    time: number | null;
    timeUnit: TimeUnit | null;
    evt: Pick<CalendarEvent, "startTime" | "endTime">;
  }) {
    return null;
  }

  static generateCommonScheduleFunctionParams(_args: {
    workflow: any;
    workflowStep: any;
    seatReferenceUid: string | undefined;
    creditCheckFn: any;
  }) {
    return {};
  }

  async generateParametersToBuildEmailWorkflowContent(_args: any): Promise<any> {
    return {};
  }
}

export const WorkflowService = StubWorkflowService;
export default StubWorkflowService;
