import { PermissionCheckService } from "@calcom/features/pbac/services/permission-check.service";
import { UserRepository } from "@calcom/features/users/repositories/UserRepository";
import { checkRateLimitAndThrowError } from "@calcom/lib/checkRateLimitAndThrowError";
import logger from "@calcom/lib/logger";
import prisma from "@calcom/prisma";
import type { CreationSource } from "@calcom/prisma/enums";
import { MembershipRole } from "@calcom/prisma/enums";
import type { TrpcSessionUser } from "@calcom/trpc/server/types";
import { TRPCError } from "@trpc/server";
import type { TInviteMemberInputSchema } from "./inviteMember.schema";
import type { TeamWithParent } from "./types";
import type { Invitation } from "./utils";
import {
  ensureAtleastAdminPermissions,
  findUsersWithInviteStatus,
  getOrgConnectionInfo,
  type getOrgState,
  getTeamOrThrow,
  getUniqueInvitationsOrThrowIfEmpty,
  handleExistingUsersInvites,
  handleNewUsersInvites,
  INVITE_STATUS,
} from "./utils";

const log = logger.getSubLogger({ prefix: ["inviteMember.handler"] });

type InviteMemberOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TInviteMemberInputSchema;
};

function getOrgConnectionInfoGroupedByUsernameOrEmail({
  uniqueInvitations,
  orgState,
  team,
  isOrg,
}: {
  uniqueInvitations: { usernameOrEmail: string; role: MembershipRole }[];
  orgState: ReturnType<typeof getOrgState>;
  team: TeamWithParent;
  isOrg: boolean;
}): Record<
  string,
  {
    invitations: Invitation[];
    orgId: number;
    orgSlug: string | null;
    isOrg: boolean;
    isInviterOrgAdmin: boolean;
  }
> {
  return {};
}

const buildInvitationsFromInput = (input: {
  usernameOrEmail: string | { email: string; name?: string | null; role?: MembershipRole }[];
  roleForAllInvitees: MembershipRole;
}): Invitation[] => {
  if (typeof input.usernameOrEmail === "string") {
    return [{ usernameOrEmail: input.usernameOrEmail, role: input.roleForAllInvitees }];
  }

  return input.usernameOrEmail.map(({ email, name }) => ({
    usernameOrEmail: email,
    role: input.roleForAllInvitees,
    name,
  }));
};

export const inviteMembersWithNoInviterPermissionCheck = async ({
  inviterName,
  inviterId,
  team,
  teamId,
  language,
  creationSource,
  orgSlug,
  invitations,
}: {
  inviterName: string | null;
  inviterId?: number;
  team?: TeamWithParent;
  teamId?: number;
  language?: string;
  creationSource?: CreationSource;
  orgSlug: string | null;
  invitations: Invitation[];
}): Promise<{
  usernameOrEmail: string | string[];
  numUsersInvited: number;
}> => {
  return {
    usernameOrEmail:
      invitations.length === 1 ? invitations[0].usernameOrEmail : invitations.map((i) => i.usernameOrEmail),
    numUsersInvited: invitations.length,
  };
};

const inviteMembers = async ({ ctx, input }: InviteMemberOptions) => {
  const { user: inviter } = ctx;
  const { usernameOrEmail, role, isPlatform, creationSource } = input;

  const team = await getTeamOrThrow(input.teamId);

  const permissionCheckService = new PermissionCheckService();
  const hasPermission = await permissionCheckService.checkPermission({
    userId: ctx.user.id,
    teamId: team.id,
    permission: "team.invite",
    fallbackRoles: [MembershipRole.OWNER, MembershipRole.ADMIN],
  });

  if (!hasPermission) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "You are not authorized to invite team members in this organization's team",
    });
  }

  const requestedSlugForTeam = team?.metadata?.requestedSlug ?? null;
  const isTeamAnOrg = team.isOrganization;
  const organization = inviter.profile.organization;

  let inviterOrgId = inviter.organization.id;
  let orgSlug = organization ? organization.slug || organization.requestedSlug : null;
  let isInviterOrgAdmin = inviter.organization.isOrgAdmin;

  const invitations = buildInvitationsFromInput({
    usernameOrEmail: usernameOrEmail as
      | string
      | { email: string; name?: string | null; role?: MembershipRole }[],
    roleForAllInvitees: role as MembershipRole,
  });
  const isAddingNewOwner = !!invitations.find((invitation) => invitation.role === MembershipRole.OWNER);

  if (isTeamAnOrg) {
    await throwIfInviterCantAddOwnerToOrg();
  }

  if (isPlatform) {
    inviterOrgId = team.id;
    orgSlug = team ? team.slug || requestedSlugForTeam : null;
    isInviterOrgAdmin = await new UserRepository(prisma).isAdminOrOwnerOfTeam({
      userId: inviter.id,
      teamId: team.id,
    });
  }

  await ensureAtleastAdminPermissions({
    userId: inviter.id,
    teamId: inviterOrgId && isInviterOrgAdmin ? inviterOrgId : input.teamId,
    isOrg: isTeamAnOrg,
  });
  const result = await inviteMembersWithNoInviterPermissionCheck({
    inviterName: inviter.name,
    inviterId: inviter.id,
    team,
    language: input.language,
    creationSource,
    orgSlug,
    invitations,
  });
  return result;

  async function throwIfInviterCantAddOwnerToOrg() {
    // Stubbed - no organization owner check needed
  }
};

export default async function inviteMemberHandler({ ctx, input }: InviteMemberOptions) {
  const { user: inviter } = ctx;
  await checkRateLimitAndThrowError({
    identifier: `invitedBy:${inviter.id}`,
  });
  return await inviteMembers({ ctx, input });
}
