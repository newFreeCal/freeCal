/**
 * Stub SSO for open-source version
 */
import { samlProductID, samlTenantID } from "./saml";

export const getSSOEnabled = () => false;
export const getSSOConfig = () => null;
export const validateSSO = () => ({ valid: false });
export const getSSOMetadata = () => "";
export const ssoTenantProduct = (_prisma?: any, _email?: string) => ({
  tenant: samlTenantID,
  product: samlProductID,
});
