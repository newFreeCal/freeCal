type SendVerificationCodeOptions = {
  ctx: {
    user: {
      id: number;
    };
  };
  input: any;
};

export const sendVerificationCodeHandler = async ({}: SendVerificationCodeOptions): Promise<{ success: true }> => {
  return { success: true };
};
