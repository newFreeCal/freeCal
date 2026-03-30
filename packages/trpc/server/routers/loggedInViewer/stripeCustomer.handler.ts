import type { TrpcSessionUser } from "@calcom/trpc/server/types";

type StripeCustomerOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
};

export const stripeCustomerHandler = async ({}: StripeCustomerOptions) => {
  return {
    isPremium: false,
    username: null,
  };
};
