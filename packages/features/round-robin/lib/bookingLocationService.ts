/**
 * Stub for open-source version
 */
export class BookingLocationService {
  static async getBookingLocation(_args: { bookingId: number }) {
    return null;
  }

  static async saveBookingLocation(_args: { bookingId: number; location: string }) {
    return null;
  }

  static async getPerHostLocation(_args: {
    hostLocation: any;
    allCredentials: any[];
    eventTypeId: number;
    userId: number;
    prismaClient: any;
  }): Promise<{
    locationBodyString: string | null;
    organizerDefaultLocationUrl: string | null;
    perHostCredentialId: number | undefined;
  }> {
    return {
      locationBodyString: null,
      organizerDefaultLocationUrl: null,
      perHostCredentialId: undefined,
    };
  }
}
