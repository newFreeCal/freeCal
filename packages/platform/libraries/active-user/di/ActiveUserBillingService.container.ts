/**
 * Stub ActiveUserBillingService container for open-source version
 */
import { StubActiveUserBillingService } from "../../ee-billing-stubs/StubActiveUserBillingService";

export const ACTIVE_USER_BILLING_DI_TOKENS = {
  ActiveUserBillingService: "ActiveUserBillingService",
};

export const getActiveUserBillingService = (): StubActiveUserBillingService => {
  return new StubActiveUserBillingService();
};

export default getActiveUserBillingService;
