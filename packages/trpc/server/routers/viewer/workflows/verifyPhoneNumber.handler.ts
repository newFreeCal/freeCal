type VerifyPhoneNumberOptions = {
  ctx: {
    user: {
      id: number;
    };
  };
  input: any;
};

export const verifyPhoneNumberHandler = async ({}: VerifyPhoneNumberOptions): Promise<{ verified: true }> => {
  return { verified: true };
};
