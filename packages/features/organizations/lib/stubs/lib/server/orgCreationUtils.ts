/**
 * Stub orgCreationUtils for open-source version
 */
import prisma from "@calcom/prisma";

export const isNotACompanyEmail = (_email: string) => false;

export async function assertCanCreateOrg(_args: {
  userId: number;
  email?: string;
}): Promise<void> {
  // No-op stub - always allow org creation in OSS
  return;
}

export async function findUserToBeOrgOwner(_args: {
  userId: number;
  email: string;
}): Promise<{ id: number; email: string; username: string | null }> {
  // Return the user as-is in OSS
  const user = await prisma.user.findUnique({
    where: { id: _args.userId },
    select: { id: true, email: true, username: true },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return {
    id: user.id,
    email: user.email,
    username: user.username,
  };
}
