type GetAllActiveWorkflowsOptions = {
  ctx: {
    user: {
      id: number;
    };
  };
  input: any;
};

export const getAllActiveWorkflowsHandler = async ({}: GetAllActiveWorkflowsOptions): Promise<[]> => {
  return [];
};
