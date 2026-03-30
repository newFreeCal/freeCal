/**
 * Stub payment for open-source version
 */
export const processPayment = async (_args: any): Promise<any> => null;
export const cancelPayment = async (_args: any): Promise<void> => {};
export const getPaymentStatus = async (_args: any): Promise<any> => null;

// Payment component (React component placeholder)
export const Payment = (_props: PaymentPageProps): JSX.Element | null => null;

export interface PaymentPageProps {
  clientSecret: string;
  payment: any;
  eventType: any;
  user: any;
  location: any;
  booking: any;
  profile?: any;
}

export const getServerSideProps = async (_ctx: any): Promise<any> => {
  return { props: {} };
};
