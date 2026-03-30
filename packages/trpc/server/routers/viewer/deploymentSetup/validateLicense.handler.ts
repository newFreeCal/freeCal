import LicenseKeyService from "@calcom/features/common/lib/stubs/server/LicenseKeyService";
import type { TrpcSessionUser } from "../../../types";
import type { TValidateLicenseInputSchema } from "./validateLicense.schema";

type ValidateLicenseOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TValidateLicenseInputSchema;
};

export const validateLicenseHandler = async ({ input }: ValidateLicenseOptions) => {
  const { licenseKey } = input;

  // Self-hosted mode - no license validation required
  return {
    valid: true,
    message: "Self-hosted mode - no license required",
  };
};
