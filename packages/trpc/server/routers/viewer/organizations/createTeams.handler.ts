import logger from "@calcom/lib/logger";
import { safeStringify } from "@calcom/lib/safeStringify";
import slugify from "@calcom/lib/slugify";
import { prisma } from "@calcom/prisma";
import type { CreationSource } from "@calcom/prisma/enums";
import { MembershipRole, RedirectType } from "@calcom/prisma/enums";
import { teamMetadataSchema } from "@calcom/prisma/zod-utils";
import { TRPCError } from "@trpc/server";
import type { TCreateTeamsSchema } from "./createTeams.schema";

const log = logger.getSubLogger({ prefix: ["viewer/organizations/createTeams.handler"] });
type CreateTeamsOptions = {
  ctx: {
    user: {
      id: number;
      organizationId: number | null;
    };
  };
  input: TCreateTeamsSchema;
};

export const createTeamsHandler = async ({ ctx, input }: CreateTeamsOptions) => {
  const organizationOwner = ctx.user;

  const { orgId, moveTeams, creationSource } = input;

  // Remove empty team names that could be there due to the default empty team name
  const teamNames = input.teamNames.filter((name) => name.trim().length > 0);

  if (orgId !== organizationOwner.organizationId) {
    log.error("User is not the owner of the organization", safeStringify({ orgId, organizationOwner }));
    throw new NotAuthorizedError();
  }

  const organization = await prisma.team.findUnique({
    where: { id: orgId },
    select: { slug: true, id: true, metadata: true },
  });

  if (!organization) throw new NoOrganizationError();

  const parseTeams = teamMetadataSchema.safeParse(organization?.metadata);

  if (!parseTeams.success) {
    throw new InvalidMetadataError();
  }

  const metadata = parseTeams.success ? parseTeams.data : undefined;

  if (!metadata?.requestedSlug && !organization?.slug) {
    throw new NoOrganizationSlugError();
  }

  // unEE: Removed team migration logic - no billing/credits in open-source version
  // Process team migrations sequentially to avoid race conditions
  // Skipping moveTeams logic as it involves credit transfers

  if (teamNames.length === 0) {
    return { duplicatedSlugs: [] as string[] };
  }

  await prisma.$transaction(
    teamNames.map((name) => {
      return prisma.team.create({
        data: {
          name,
          parentId: orgId,
          slug: slugify(name),
          members: {
            create: { userId: ctx.user.id, role: MembershipRole.OWNER, accepted: true },
          },
        },
      });
    })
  );

  return { duplicatedSlugs: [] as string[] };
};

class NotAuthorizedError extends TRPCError {
  constructor() {
    super({ code: "FORBIDDEN", message: "not_authorized" });
  }
}

class InvalidMetadataError extends TRPCError {
  constructor() {
    super({ code: "BAD_REQUEST", message: "invalid_organization_metadata" });
  }
}

class NoOrganizationError extends TRPCError {
  constructor() {
    super({ code: "BAD_REQUEST", message: "no_organization_found" });
  }
}

class NoOrganizationSlugError extends TRPCError {
  constructor() {
    super({ code: "BAD_REQUEST", message: "no_organization_slug" });
  }
}

export default createTeamsHandler;
