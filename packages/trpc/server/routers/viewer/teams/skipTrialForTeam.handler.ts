import logger from "@calcom/lib/logger";
import { prisma } from "@calcom/prisma";
import type { TrpcSessionUser } from "../../../types";
import type { TSkipTrialForTeamInputSchema } from "./skipTrialForTeam.schema";

const log = logger.getSubLogger({ prefix: ["skipTrialForTeam"] });

type SkipTrialForTeamOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TSkipTrialForTeamInputSchema;
};

export const skipTrialForTeamHandler = async ({ ctx, input }: SkipTrialForTeamOptions) => {
  log.debug("skipTrialForTeam called - trial skipping disabled in open-source version");
  return { success: true };
};

export default skipTrialForTeamHandler;
