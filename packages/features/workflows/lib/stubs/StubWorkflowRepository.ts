/**
 * Stub WorkflowRepository for open-source version
 * Provides no-op implementation that returns empty arrays/null
 */
import { z } from "zod";

export const ZFilteredListInputSchema = z.object({
  filters: z.any().optional(),
});

export type TFilteredListInputSchema = z.infer<typeof ZFilteredListInputSchema>;

export const ZGetInputSchema = z.object({
  id: z.number(),
});

export type TGetInputSchema = z.infer<typeof ZGetInputSchema>;

export const ZGetVerifiedEmailsInputSchema = z.object({
  teamId: z.number().optional(),
});

export type TGetVerifiedEmailsInputSchema = z.infer<typeof ZGetVerifiedEmailsInputSchema>;

export const ZGetVerifiedNumbersInputSchema = z.object({
  teamId: z.number().optional(),
});

export type TGetVerifiedNumbersInputSchema = z.infer<typeof ZGetVerifiedNumbersInputSchema>;

export const WorkflowRepository = {
  async findMany(_args: { where: { OR?: { teamId: number } | { userId: number } | { id?: number } } }) {
    return [];
  },

  async findFirst(_args: { where: { id?: number } | { eventTypeIds?: number[] } }) {
    return null;
  },

  async deleteAllWorkflowReminders(_args: { where: { bookingId: number } } | Array<{ id: number }>) {
    return null;
  },

  async findWorkflowsActiveOnRoutingForm(_args: { routingFormId: string }) {
    return [];
  },

  async findActiveWorkflowsOnTeam(_args: { parentTeamId: number; teamId: number }) {
    return [];
  },

  async getRemindersFromRemovedTeams(_removedTeams: number[], _workflowSteps: any[], _activeOn?: number[]) {
    return [];
  },
};

export const StubWorkflowRepository = WorkflowRepository;

export type {
  WorkflowRepository as WorkflowRepositoryType,
  StubWorkflowRepository as StubWorkflowRepositoryType,
};
