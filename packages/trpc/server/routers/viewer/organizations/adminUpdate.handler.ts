import { AdminOrganizationUpdateService } from "@calcom/features/organizations/lib/stubs/lib/service/AdminOrganizationUpdateService";
import { getOrganizationRepository } from "@calcom/features/organizations/lib/stubs/OrganizationRepository";
import { prisma } from "@calcom/prisma";
import type { TrpcSessionUser } from "../../../types";
import type { TAdminUpdate } from "./adminUpdate.schema";

type AdminUpdateOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TAdminUpdate;
};

export const adminUpdateHandler = async ({ input }: AdminUpdateOptions) => {
  const organizationRepository = getOrganizationRepository();
  const adminOrganizationUpdateService = new AdminOrganizationUpdateService({
    prismaClient: prisma,
    organizationRepository,
  });

  return adminOrganizationUpdateService.updateOrganization(input);
};

export default adminUpdateHandler;
