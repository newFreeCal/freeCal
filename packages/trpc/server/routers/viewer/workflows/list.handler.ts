import type { Workflow } from "@calcom/features/workflows/lib/stubs/types";

type ListOptions = {
  ctx: {
    user: {
      id: number;
    };
  };
  input: {
    includeOnlyEventTypeWorkflows?: boolean;
    teamId?: number;
    userId?: number;
  };
};

// Minimal stub implementation - returns empty array
// In production, this would fetch workflows from the database
export const listHandler = async ({}: ListOptions): Promise<{ workflows: Array<Workflow & { readOnly?: boolean }> }> => {
  return { workflows: [] as Array<Workflow & { readOnly?: boolean }> };
};
