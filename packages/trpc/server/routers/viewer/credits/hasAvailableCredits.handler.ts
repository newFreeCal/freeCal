type HasAvailableCreditsOptions = {
  ctx: {
    user: {
      id: number;
      organization?: {
        id: number | null;
      };
    };
  };
  input: any;
};

export const hasAvailableCreditsHandler = async ({}: HasAvailableCreditsOptions) => {
  return true;
};
