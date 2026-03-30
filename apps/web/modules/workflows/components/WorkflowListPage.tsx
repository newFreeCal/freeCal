/**
 * Stub for open-source version
 * Replaces EE-only WorkflowType type
 */
import type { WorkflowStep } from "@calcom/features/workflows/lib/stubs/types";

export type WorkflowType = {
  id: number;
  name: string;
  eventType: string;
  enabled: boolean;
  activeOn?: Array<{ eventType: { id: number; title: string; parentId: number | null } }>;
  isOrg?: boolean;
  steps: WorkflowStep[];
  readOnly?: boolean;
  permissions?: {
    canUpdate: boolean;
  };
  teamId?: number | null;
};
