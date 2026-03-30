/**
 * Stub OrganizationPaymentService for open-source version
 */
export class OrganizationPaymentService {
  constructor(_args: any) {}

  async createWithPaymentIntent(_args: any, _organizationOnboarding?: any) {
    return { success: true };
  }

  async createPaymentIntent(_args: any, _organizationOnboarding?: any) {
    return { checkoutUrl: "https://checkout.url" };
  }
}

export default OrganizationPaymentService;
