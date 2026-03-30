type WorkflowOrderOptions = {
  ctx: {
    user: {
      id: number;
    };
  };
  input: any;
};

export const workflowOrderHandler = async ({}: WorkflowOrderOptions): Promise<void> => {
  return;
};

type SupportedFilters = any;

export function getPrismaWhereFromFilters(user: { id: number }, filters: SupportedFilters) {
  return { OR: [] };
}
