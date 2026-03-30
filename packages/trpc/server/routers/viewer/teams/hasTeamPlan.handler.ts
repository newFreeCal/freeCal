import { MembershipRepository } from "@calcom/features/membership/repositories/MembershipRepository";
import { prisma } from "@calcom/prisma";

type HasTeamPlanOptions = {
  ctx: {
    user: { id: number };
  };
};

export const hasTeamPlanHandler = async ({ ctx }: HasTeamPlanOptions) => {
  // In open-source version, no team plans - all features are free
  return { hasTeamPlan: false, plan: null };
};

export default hasTeamPlanHandler;
