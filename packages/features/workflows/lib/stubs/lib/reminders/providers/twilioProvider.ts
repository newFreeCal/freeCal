// Stub for twilioProvider - open source version
export const getMessageInfo = async (_smsSid: string) => {
  return {
    price: null,
    numSegments: 1,
  };
};

// Stub for compatibility - no-op in open-source version
export const validateWebhookRequest = async (_args: {
  requestUrl: string;
  signature: string;
  params: any;
  authToken?: string;
}) => {
  return true;
};

// Stub for compatibility - open-source version
export const getCountryCodeForNumber = (_phone: string) => {
  return "US";
};
