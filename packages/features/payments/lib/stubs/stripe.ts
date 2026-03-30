/**
 * Stub stripe for open-source version
 */

import type Stripe from "stripe";

type StripeSession = Stripe.Checkout.Session;
type StripeSubscription = Stripe.Subscription;
type StripePaymentIntent = Stripe.PaymentIntent;

const mockStripe = {
  checkout: {
    sessions: {
      create: (_args: any): Promise<StripeSession> => Promise.resolve({ id: "cs_test", url: "" } as any),
      cancel: (_args: any): Promise<StripeSession> => Promise.resolve({ id: "cs_test", status: "canceled" } as any),
      retrieve: (_args: any, _options?: any): Promise<StripeSession> =>
        Promise.resolve({ id: "cs_test", url: "", metadata: { organizationOnboardingId: undefined }, payment_status: "paid", subscription: { id: "sub_test" }, customer: "cust_test" } as any),
    },
  },
  subscriptions: {
    create: (_args: any): Promise<StripeSubscription> => Promise.resolve({ id: "sub_test" } as any),
    retrieve: (_args: any): Promise<StripeSubscription> => Promise.resolve({ id: "sub_test" } as any),
    cancel: (_args: any): Promise<StripeSubscription> => Promise.resolve({ id: "sub_test", status: "canceled" } as any),
  },
  paymentIntents: {
    retrieve: (_args: any): Promise<StripePaymentIntent> => Promise.resolve({ id: "pi_test", status: "pending" } as any),
  },
  customers: {
    create: (_args: any): Promise<Stripe.Customer> => Promise.resolve({ id: "cust_test" } as any),
  },
  webhooks: {
    constructEvent: (_payload: string, _sig: string | string[], _secret: string) => ({
      type: "customer.subscription.updated",
      data: { object: { id: "sub_test" } },
    } as unknown as Stripe.Event),
  },
};

export default mockStripe;

export const stripe = mockStripe;
