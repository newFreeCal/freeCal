import { DI_TOKENS } from "@calcom/features/di/tokens";
import { TeamRepository } from "@calcom/features/teams/lib/stubs/repositories/StubTeamRepository";
import { createModule } from "../di";

export const teamRepositoryModule = createModule();
teamRepositoryModule.bind(DI_TOKENS.TEAM_REPOSITORY).toClass(TeamRepository, [DI_TOKENS.PRISMA_CLIENT]);
