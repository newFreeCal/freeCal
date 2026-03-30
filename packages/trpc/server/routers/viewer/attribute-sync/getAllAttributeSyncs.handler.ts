import type { IntegrationAttributeSync } from "@calcom/features/integration-attribute-sync/lib/stubs/repositories/IIntegrationAttributeSyncRepository";

type GetAllAttributeSyncsOptions = {
  ctx: {
    user: {
      id: number;
    };
  };
  input: any;
};

const getAllAttributeSyncsHandler = async ({}: GetAllAttributeSyncsOptions): Promise<
  IntegrationAttributeSync[]
> => {
  return [];
};

export default getAllAttributeSyncsHandler;
