/**
 * Stub orgCreationUtils for open-source version
 */
import { prisma } from "@calcom/prisma";

export const orgCreationUtils = {
  isCompanyEmail: () => false,
  getOrgNameFromEmail: () => "",
};

export async function findUserToBeOrgOwner(email: string) {
  return await prisma.user.findUnique({
    where: { email: email.toLowerCase() },
  });
}

export async function assertCanCreateOrg(_args: {
  slug: string;
  isPlatform: boolean;
  orgOwner: { id: number };
  restrictBasedOnMinimumPublishedTeams?: boolean;
}) {
  // No restrictions in open-source version
  return true;
}
