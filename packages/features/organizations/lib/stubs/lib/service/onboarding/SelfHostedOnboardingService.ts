/**
 * Stub SelfHostedOnboardingService for open-source version
 */
export class SelfHostedOnboardingService {
  constructor(_userContext?: any) {}

  async createOrganization(_args: {
    id: string;
    logo?: string | null;
    bio?: string | null;
    brandColor?: string | null;
    bannerUrl?: string | null;
    invitedMembers?: { email: string; name?: string }[];
    teams?: { id: number; name: string; isBeingMigrated: boolean; slug: string | null }[];
    orgOwnerEmail: string;
    slug: string;
    name: string;
    billingPeriod: any;
    seats: number;
    pricePerSeat: number;
    stripeCustomerId?: string | null;
    isPlatform: boolean;
    isDomainConfigured?: boolean;
    organizationId?: number | null;
  }): Promise<{ organization: { id: string; name: string; slug: string; stripeCustomerId?: string | null } }> {
    return { organization: { id: "1", name: "Stub Org", slug: "stub-org", stripeCustomerId: "stripe_123" } };
  }
}

export default SelfHostedOnboardingService;

// Alias for backward compatibility
export const SelfHostedOrganizationOnboardingService = SelfHostedOnboardingService;
export const SelfHostedOrganizationOnboardingServiceClass = SelfHostedOnboardingService;
