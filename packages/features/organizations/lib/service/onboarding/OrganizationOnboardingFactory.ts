/**
 * Stub OrganizationOnboardingFactory for open-source version
 * No onboarding services in OSS
 */
export class OrganizationOnboardingFactory {
  static create(_args: { id: number; email: string; role: string }) {
    return {
      createOnboardingIntent: (_input: any) => {
        return { success: true };
      },
    };
  }
}
