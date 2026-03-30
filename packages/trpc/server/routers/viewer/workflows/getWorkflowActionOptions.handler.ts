type GetWorkflowActionOptionsOptions = {
  ctx: {
    user: {
      id: number;
      locale: string;
    };
  };
};

export const getWorkflowActionOptionsHandler = async ({}: GetWorkflowActionOptionsOptions): Promise<{ options: [] }> => {
  return { options: [] };
};
