type GetAllCreditsOptions = {
  ctx: {
    user: {
      id: number;
    };
  };
  input: any;
};

type GetAllCreditsOutput = {
  credits: {
    totalMonthlyCredits: number;
    totalCreditsUsedThisMonth: number;
    totalRemainingMonthlyCredits: number;
    additionalCredits: number;
  };
};

export const getAllCreditsHandler = async ({}: GetAllCreditsOptions): Promise<GetAllCreditsOutput> => {
  return {
    credits: {
      totalMonthlyCredits: Number.MAX_SAFE_INTEGER,
      totalCreditsUsedThisMonth: 0,
      totalRemainingMonthlyCredits: Number.MAX_SAFE_INTEGER,
      additionalCredits: Number.MAX_SAFE_INTEGER,
    },
  };
};
