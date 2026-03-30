import { emailSchema } from "@calcom/lib/emailSchema";
import slugify from "@calcom/lib/slugify";
import { BillingPeriod, CreationSource } from "@calcom/prisma/enums";
import { orgOnboardingInvitedMembersSchema, orgOnboardingTeamsSchema } from "@calcom/prisma/zod-utils";
import { z } from "zod";

export const createOrganizationSchema = z.object({
  name: z.string(),
  slug: z.string().transform((val) => slugify(val.trim())),
  orgOwnerEmail: emailSchema,
  language: z.string().optional(),
  seats: z.number().nullish(),
  pricePerSeat: z.number().nullish(),
  isPlatform: z.boolean().default(false),
  billingPeriod: z.nativeEnum(BillingPeriod).default(BillingPeriod.MONTHLY),
  creationSource: z.nativeEnum(CreationSource),
  logo: z.string().nullish(),
  bio: z.string().nullish(),
  brandColor: z.string().nullish(),
  bannerUrl: z.string().nullish(),
  teams: orgOnboardingTeamsSchema.optional(),
  invitedMembers: orgOnboardingInvitedMembersSchema.optional(),
  onboardingId: z.string().optional(),
  stripeCustomerId: z.string().optional(),
  stripeSubscriptionId: z.string().optional(),
  organizationId: z.number().optional(),
  isDomainConfigured: z.boolean().optional(),
});

export type TCreateOrganizationSchema = z.infer<typeof createOrganizationSchema>;
