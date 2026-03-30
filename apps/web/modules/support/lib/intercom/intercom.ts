export type Contact = {
  id?: string;
  email?: string;
  name?: string;
  external_id?: string;
  type?: string;
  custom_attributes?: Record<string, any>;
};

interface Intercom {
  getContactByEmail: (email: string) => Promise<{ data?: Contact; error?: string }>;
  createContact: (contact: any) => Promise<{ data?: Contact; error?: string }>;
  createConversation: (conversation: any) => Promise<{ data?: any; error?: string }>;
}

export const intercom: Intercom = {
  getContactByEmail: async (_email: string): Promise<{ data?: Contact; error?: string }> => ({
    data: undefined,
    error: undefined,
  }),
  createContact: async (_contact: any): Promise<{ data?: Contact; error?: string }> => ({
    data: { id: "1" },
    error: undefined,
  }),
  createConversation: async (_conversation: any): Promise<{ data?: any; error?: string }> => ({
    data: { id: "1" },
    error: undefined,
  }),
};
