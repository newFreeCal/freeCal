/**
 * Stub for open-source version
 * Impersonation is an enterprise feature
 */
import type { Provider } from "next-auth/providers";

const ImpersonationProvider: Provider = {
  id: "impersonation",
  name: "Impersonation",
  type: "credentials",
  credentials: {},
  authorize: async () => null,
};

export default ImpersonationProvider;
