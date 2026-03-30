/**
 * Stub OrganizationOnboardingFactory for open-source version
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
