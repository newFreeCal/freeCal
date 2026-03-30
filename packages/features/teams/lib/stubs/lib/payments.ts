/**
 * Stub teams payments for open-source version
 */
export const getStripePublicKey = () => "";

export const generateTeamCheckoutSession = async (_args: any) => {
  return { url: null, sessionId: null };
};

export const purchaseTeamOrOrgSubscription = async (_args: any) => {
  return { url: null };
};
