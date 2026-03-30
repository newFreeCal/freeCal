type GetVerifiedNumbersOptions = {
  ctx: {
    user: {
      id: number;
    };
  };
  input: any;
};

export const getVerifiedNumbersHandler = async ({}: GetVerifiedNumbersOptions): Promise<[]> => {
  return [];
};
