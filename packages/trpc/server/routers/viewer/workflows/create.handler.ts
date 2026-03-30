type CreateOptions = {
  ctx: {
    user: {
      id: number;
    };
  };
  input: any;
};

export const createHandler = async ({}: CreateOptions): Promise<null> => {
  return null;
};
