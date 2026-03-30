/**
 * Stub WorkflowReminderRepository for open-source version
 */
export class WorkflowReminderRepository {
  constructor(_prisma?: any) {}

  async findMany(_args: { where: { workflowId?: number; userId?: number } }): Promise<
    {
      id: number;
      scheduled: boolean;
      bookingId: number;
      workflowStepId: number;
      booking?: { id: number; uid: string };
      workflowStep?: { id: number; action: string };
    }[]
  > {
    return [];
  }

  async findFirst(_args: { where: { id: number } }): Promise<{
    id: number;
    scheduled: boolean;
    bookingId: number;
    workflowStepId: number;
    booking?: { id: number; uid: string };
    workflowStep?: { id: number; action: string };
  } | null> {
    return null;
  }

  async create(_args: { data: any }): Promise<{
    id: number;
    scheduled: boolean;
    bookingId: number;
    workflowStepId: number;
    booking?: { id: number; uid: string };
    workflowStep?: { id: number; action: string };
    uuid?: string;
  }> {
    return { id: 1, scheduled: true, bookingId: 1, workflowStepId: 1, uuid: "stub-uuid-123" };
  }

  async deleteMany(_args: { where: { id: number[] } }): Promise<{ count: number }> {
    return { count: 0 };
  }

  async findWorkflowReminderForAIPhoneCallExecution(_workflowReminderId: number): Promise<{
    scheduled: boolean;
    bookingId: number;
    workflowStepId: number;
    booking?: {
      id: number;
      uid: string;
      attendees: { name: string; email: string; timeZone?: string }[];
      startTime: string;
      endTime: string;
      eventType?: {
        title?: string;
        bookingFields?: any;
        description?: string | null;
        uid?: string;
        eventTypeId?: number;
      };
      description: string | null;
      location?: string | null;
      customInputs?: any;
      user?: { name?: string; timeZone?: string };
    };
    workflowStep?: {
      id: number;
      action: string;
      workflow: { trigger: string };
      agent: { outboundEventTypeId?: number };
    };
  } | null> {
    return null;
  }

  async updateWorkflowReminderReferenceAndScheduled(
    _workflowReminderId: number,
    _data: any
  ): Promise<{ success: boolean }> {
    return { success: true };
  }

  async findByIdIncludeStepAndWorkflow(_id: number): Promise<{
    id: number;
    scheduled: boolean;
    bookingId: number;
    workflowStepId: number;
    booking?: { id: number; uid: string };
    workflowStep?: { id: number; action: string; workflow: any };
  } | null> {
    return null;
  }
}
