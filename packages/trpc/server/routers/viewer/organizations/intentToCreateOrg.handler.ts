import {
  assertCanCreateOrg,
  findUserToBeOrgOwner,
} from "@calcom/features/organizations/lib/stubs/lib/server/orgCreationUtils";
import { OrganizationOnboardingFactory } from "@calcom/features/organizations/lib/stubs/service/onboarding/OrganizationOnboardingFactory.stub";
import logger from "@calcom/lib/logger";
import { safeStringify } from "@calcom/lib/safeStringify";
import { prisma } from "@calcom/prisma";
import { UserPermissionRole } from "@calcom/prisma/enums";
import { TRPCError } from "@trpc/server";
import type { TrpcSessionUser } from "../../../types";
import type { TIntentToCreateOrgInputSchema } from "./intentToCreateOrg.schema";

const log = logger.getSubLogger({ prefix: ["intentToCreateOrgHandler"] });

type CreateOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TIntentToCreateOrgInputSchema;
};

export const intentToCreateOrgHandler = async ({ input, ctx }: CreateOptions) => {
  const { slug, name, orgOwnerEmail, isPlatform } = input;
  log.debug(
    "Starting organization creation intent (open-source version)",
    safeStringify({ slug, name, orgOwnerEmail, isPlatform })
  );

  const loggedInUser = ctx.user;
  if (!loggedInUser) throw new TRPCError({ code: "UNAUTHORIZED", message: "You are not authorized." });

  const IS_USER_ADMIN = loggedInUser.role === UserPermissionRole.ADMIN;
  log.debug("User authorization check", safeStringify({ userId: loggedInUser.id, isAdmin: IS_USER_ADMIN }));

  if (!IS_USER_ADMIN && loggedInUser.email !== orgOwnerEmail) {
    log.warn(
      "Unauthorized organization creation attempt",
      safeStringify({ loggedInUserEmail: loggedInUser.email, orgOwnerEmail })
    );
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "You can only create organization where you are the owner",
    });
  }

  const orgOwner = await findUserToBeOrgOwner({
    userId: ctx.user.id,
    email: orgOwnerEmail,
  });
  if (!orgOwner) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `No user found with email ${orgOwnerEmail}`,
    });
  }
  log.debug("Found organization owner", safeStringify({ orgOwnerId: orgOwner.id, email: orgOwner.email }));

  // Check for existing incomplete onboarding (resume flow)
  const organizationOnboarding = await prisma.organizationOnboarding.findUnique({
    where: { orgOwnerEmail: orgOwnerEmail.toLowerCase() },
    select: { id: true, isComplete: true },
  });

  if (organizationOnboarding) {
    if (organizationOnboarding.isComplete) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "organization_onboarding_already_exists",
      });
    }

    log.debug(
      "Found incomplete onboarding record - proceeding with resume flow",
      safeStringify({ onboardingId: organizationOnboarding.id, slug })
    );

    input.onboardingId = organizationOnboarding.id;
  }

  await assertCanCreateOrg({
    userId: ctx.user.id,
    email: ctx.user.email,
  });

  // In open-source version, skip onboarding service - just return success
  // Return checkoutUrl as null for self-hosted flow (billing disabled)
  const result = {
    onboardingId: organizationOnboarding?.id ?? "stub-onboarding-id",
    checkoutUrl: null,
  };

  log.debug("Organization creation intent successful", safeStringify({ slug, orgOwnerId: orgOwner.id }));

  return result;
};

export default intentToCreateOrgHandler;
