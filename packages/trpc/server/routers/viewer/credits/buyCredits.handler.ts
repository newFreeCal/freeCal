import { WEBAPP_URL } from "@calcom/lib/constants";
import type { TBuyCreditsSchema } from "./buyCredits.schema";

type BuyCreditsOptions = {
  ctx: {
    user: {
      id: number;
    };
  };
  input: TBuyCreditsSchema;
};

export const buyCreditsHandler = async ({ ctx, input }: BuyCreditsOptions) => {
  const { quantity, teamId } = input;

  let redirectUrl = `${WEBAPP_URL}/settings/billing`;

  if (teamId) {
    redirectUrl = `${WEBAPP_URL}/settings/teams/${teamId}/billing`;
  }

  return {
    sessionUrl: `${redirectUrl}?credits=purchased&quantity=${quantity}`,
  };
};
