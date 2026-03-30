type GetOptions = {
  ctx: {
    user: {
      id: number;
    };
  };
  input: {
    id: number;
  };
};

export const getHandler = async ({}: GetOptions): Promise<null> => {
  return null;
};
