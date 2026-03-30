import { MembershipRepository } from "@calcom/features/membership/repositories/MembershipRepository";
import { PermissionCheckService } from "@calcom/features/pbac/services/permission-check.service";
import logger from "@calcom/lib/logger";
import { prisma } from "@calcom/prisma";
import { MembershipRole } from "@calcom/prisma/enums";
import { TRPCError } from "@trpc/server";
import type { TrpcSessionUser } from "../../../types";
import type { TGetSubscriptionStatusInputSchema } from "./getSubscriptionStatus.schema";

const log = logger.getSubLogger({ prefix: ["getSubscriptionStatus"] });

type GetSubscriptionStatusOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TGetSubscriptionStatusInputSchema;
};

export const getSubscriptionStatusHandler = async ({ ctx, input }: GetSubscriptionStatusOptions) => {
  const { teamId } = input;

  const membershipRepository = new MembershipRepository();
  const membership = await membershipRepository.findUniqueByUserIdAndTeamId({
    userId: ctx.user.id,
    teamId,
  });

  if (!membership || !membership.accepted) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "You are not a member of this team",
    });
  }

  const team = await prisma.team.findUnique({
    where: { id: teamId },
    select: { isOrganization: true, name: true },
  });

  if (!team) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Team not found",
    });
  }

  const permissionService = new PermissionCheckService();
  const hasManageBillingPermission = await permissionService.checkPermission({
    userId: ctx.user.id,
    teamId,
    permission: team.isOrganization ? "organization.manageBilling" : "team.manageBilling",
    fallbackRoles: [MembershipRole.ADMIN, MembershipRole.OWNER],
  });

  if (!hasManageBillingPermission) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "Only team owners and admins can view subscription status",
    });
  }

  log.debug(`Subscription status check for team ${teamId}: Active (open-source version)`);

  return {
    status: "active",
    isTrialing: false,
    billingMode: null,
  };
};

export default getSubscriptionStatusHandler;
