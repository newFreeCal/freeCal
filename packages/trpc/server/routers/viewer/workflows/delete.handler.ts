type DeleteOptions = {
  ctx: {
    user: {
      id: number;
    };
  };
  input: {
    id: number;
  };
};

export const deleteHandler = async ({}: DeleteOptions): Promise<{ id: number }> => {
  return { id: 0 };
};
