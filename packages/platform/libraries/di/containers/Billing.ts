export const ACTIVE_USER_BILLING_DI_TOKENS = {
  IBillingProviderService: "IBillingProviderService",
  IBillingPeriodService: "IBillingPeriodService",
  IBillingPlanService: "IBillingPlanService",
  IDueInvoiceService: "IDueInvoiceService",
  ISeatChangeTrackingService: "ISeatChangeTrackingService",
  IActiveUserBillingService: "IActiveUserBillingService",
};

export const Billing = {
  container: {},
};

export const CHECKOUT_SESSION_TYPES = {
  TEAM_SUBSCRIPTION: "team_subscription",
  ORGANIZATION_SUBSCRIPTION: "organization_subscription",
};

export function getBillingProviderService() {
  return null;
}

export function getTeamBillingServiceFactory() {
  return null;
}
