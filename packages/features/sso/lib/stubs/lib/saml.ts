/**
 * Stub saml for open-source version
 */

export const canAccessOrganization = (_user: any, _teamId: number | null) => ({
  message: _teamId === null ? "Access denied" : "Access granted",
  access: _teamId !== null,
});

export const samlProductID = "freeCal";

export const samlTenantID = "freeCal";

export const tenantPrefix = "fcal_";

export const getAssertionConsumerServiceUrl = () => "";

export const getIssuer = () => "";

export const getMetadata = () => "";

export const getServiceProviderMetadata = () => "";

export const validateSignature = () => true;

export const isSAMLLoginEnabled = false;

// Stub for compatibility - open-source version
export const hostedCal = {
  samlProductID: "freeCal",
  samlTenantID: "freeCal",
};

export const clientSecretVerifier = "stub-secret";

export type SSOConnection = {
  id: string;
  type: "saml" | "oidc";
  name?: string;
  acsUrl?: string | null;
  entityId?: string | null;
  callbackUrl?: string | null;
};

export const oidcPath = "/api/auth/oidc";

export const getSamlSPConfig = () => ({
  getServiceProviderMetadata: () => "",
});

export const get = () => ({
  getServiceProviderMetadata: () => "",
});
