type VerifyEmailCodeOptions = {
  ctx: {
    user: {
      id: number;
    };
  };
  input: any;
};

export const verifyEmailCodeHandler = async ({}: VerifyEmailCodeOptions): Promise<boolean> => {
  return true;
};
