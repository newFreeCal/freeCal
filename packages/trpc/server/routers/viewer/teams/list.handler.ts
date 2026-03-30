import { TeamRepository } from "@calcom/features/teams/lib/stubs/repositories/StubTeamRepository";
import prisma from "@calcom/prisma";
import type { TrpcSessionUser } from "../../../types";
import type { TGetListSchema } from "./list.schema";

type ListOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TGetListSchema;
};

export type TeamListOutput = {
  id: number;
  slug: string;
  name: string | null;
  parentId: number | null;
  isOrganization: boolean;
  organizationSettings?: any;
  requestedSlug?: string;
  isPlatform?: boolean;
  logoUrl?: string | null;
  accepted: boolean;
  role: import("@calcom/prisma/enums").MembershipRole | null | undefined;
  isOrgAdmin?: boolean;
  isPrivate?: boolean;
  user?: any;
};

export const listHandler = async ({ ctx, input }: ListOptions): Promise<TeamListOutput[]> => {
  const teamRepo = new TeamRepository(prisma);
  return teamRepo.findTeamsByUserId({
    userId: ctx.user.id,
    includeOrgs: input?.includeOrgs,
  });
};

export default listHandler;
