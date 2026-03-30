/**
 * Stub for open-source version
 */
export type PaymentPageProps = {
  paymentIntentId: string;
  eventId: number | undefined;
  bookingId: number | undefined;
  amount: number;
  currency: string;
  booking?: {
    uid: string;
    title: string;
    description: string | null;
    startTime: Date;
    endTime: Date;
    location: string | null;
    attendees: {
      email: string;
      name: string;
    }[];
    user: {
      name: string;
      email: string;
    };
    responses: Record<string, unknown>;
  };
};
