// Stub for stripe-subscription-utils - open source version
export const extractBillingDataFromStripeSubscription = (_subscription: any) => {
  return {
    billingPeriod: "monthly",
    pricePerSeat: 0,
    paidSeats: 0,
  };
};
