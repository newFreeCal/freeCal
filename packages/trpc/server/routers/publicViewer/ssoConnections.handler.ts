import jackson from "@calcom/features/sso/lib/stubs/lib/jackson";
import { isSAMLLoginEnabled, samlProductID, samlTenantID } from "@calcom/features/sso/lib/stubs/lib/saml";
import { HOSTED_CAL_FEATURES } from "@calcom/lib/constants";
import { TRPCError } from "@trpc/server";

export const handler = async () => {
  try {
    if (HOSTED_CAL_FEATURES || !isSAMLLoginEnabled) {
      return {
        connectionExists: null,
      };
    }

    const { connectionController } = await jackson();

    const connections = await connectionController.getConnections({
      tenant: samlTenantID,
      product: samlProductID,
    });

    return {
      connectionExists: connections.length > 0,
    };
  } catch (err) {
    console.error("Error getting SSO connections", err);
    throw new TRPCError({ code: "BAD_REQUEST", message: "Fetching SSO connections failed." });
  }
};

export default handler;
