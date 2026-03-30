type GetVerifiedEmailsOptions = {
  ctx: {
    user: {
      id: number;
      email: string;
    };
  };
  input: any;
};

export const getVerifiedEmailsHandler = async ({}: GetVerifiedEmailsOptions): Promise<[]> => {
  return [];
};
