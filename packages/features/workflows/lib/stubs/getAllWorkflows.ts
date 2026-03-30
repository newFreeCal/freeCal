/**
 * Stub getAllWorkflows for open-source version
 */
import type { Workflow } from "./types";

export const workflowSelect = {
  id: true,
  trigger: true,
  time: true,
  timeUnit: true,
  userId: true,
  teamId: true,
  name: true,
  isActiveOnAll: true,
  type: true,
  steps: {
    select: {
      id: true,
      action: true,
      sendTo: true,
      reminderBody: true,
      emailSubject: true,
      emailBody: true,
      template: true,
      sender: true,
      includeCalendarEvent: true,
      stepNumber: true,
      numberVerificationPending: true,
      numberRequired: true,
      verifiedAt: true,
    },
  },
};

export async function getAllWorkflows(args: {
  entityWorkflows?: Workflow[];
  userId?: number | null;
  teamId?: number | null;
  orgId?: number | null;
  workflowsLockedForUser?: boolean;
  type?: any;
}) {
  const workflows = args.entityWorkflows || [];
  return workflows;
}
