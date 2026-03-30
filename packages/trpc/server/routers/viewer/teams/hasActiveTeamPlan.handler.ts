import { MembershipRepository } from "@calcom/features/membership/repositories/MembershipRepository";
import type { TrpcSessionUser } from "@calcom/trpc/server/types";
import type { THasActiveTeamPlanInputSchema } from "./hasActiveTeamPlan.schema";

type HasActiveTeamPlanOptions = {
  ctx: {
    user: Pick<NonNullable<TrpcSessionUser>, "id">;
  };
  input: THasActiveTeamPlanInputSchema;
};

export const hasActiveTeamPlanHandler = async ({ ctx, input }: HasActiveTeamPlanOptions) => {
  if (input?.ownerOnly) {
    const ownerTeams = await MembershipRepository.findAllAcceptedTeamMemberships(ctx.user.id, {
      role: "OWNER",
    });
    return { isActive: !!ownerTeams.length, isTrial: false };
  }

  const teams = await MembershipRepository.findAllAcceptedTeamMemberships(ctx.user.id, {
    accepted: true,
  });

  if (!teams.length) return { isActive: false, isTrial: false };

  return { isActive: true, isTrial: false };
};

export default hasActiveTeamPlanHandler;
