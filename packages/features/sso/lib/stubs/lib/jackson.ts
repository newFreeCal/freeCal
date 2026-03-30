/**
 * Stub jackson for open-source version
 * Jackson is the open-source SAML library we use
 */

import type { DirectorySyncRequest, DirectorySyncResponse, EventCallback } from "@boxyhq/saml-jackson";

class RequestHandler {
  async handle(_request: DirectorySyncRequest, _callback?: EventCallback): Promise<DirectorySyncResponse> {
    return { status: 200, data: {} };
  }
}

export async function jackson() {
  return {
    oauthController: {
      authorize: async (_args: any): Promise<{ redirect_url?: string }> => ({ redirect_url: "/" }),
      oidcAuthzResponse: async (_args: { code: string; state: string }): Promise<{ redirect_url?: string }> => ({
        redirect_url: "/",
      }),
      samlResponse: async (_args: any): Promise<{ redirect_url?: string; error?: string }> => ({
        redirect_url: "/",
      }),
      token: async (_args: any): Promise<any> => ({}),
      userInfo: async (_args: any): Promise<any> => ({}),
    },
    connectionController: {
      deleteConnections: (_args?: any) => null,
      updateConnections: (_args?: any) => null,
      createConnections: (_args?: any) => null,
      getConnections: (_args?: any): Array<{ id: string; type: "saml" | "oidc"; name?: string }> => [],
      createSAMLConnection: (_args?: any) => null,
      createOIDCConnection: (_args?: any) => null,
    },
    dsyncController: {
      deleteConnections: () => null,
      updateConnections: () => null,
      createConnections: () => null,
      getConnections: () => [],
      directories: {
        create: async (_args: any): Promise<{ data: any; error: any }> => ({
          data: { id: "1", name: "", tenant: "", product: "", type: "", status: "" },
          error: null,
        }),
        get: async (_args: any): Promise<{ data: any; error: any }> => ({
          data: { id: "1", name: "", tenant: "", product: "", type: "", status: "" },
          error: null,
        }),
        update: async (_args: any): Promise<{ data: any; error: any }> => ({
          data: { id: "1", name: "", tenant: "", product: "", type: "", status: "" },
          error: null,
        }),
        delete: async (_args: any): Promise<{ data: any; error: any }> => ({ data: null, error: null }),
        list: async (): Promise<{ data: any[]; error: any }> => ({ data: [], error: null }),
      },
      requests: new RequestHandler(),
      events: {
        batch: {
          process: async () => {},
          queue: async () => {},
        },
      },
    },
    samlSPConfig: {
      get: (): {
        getServiceProviderMetadata: () => string;
        acsUrl?: string | null;
        entityId?: string | null;
      } => ({
        getServiceProviderMetadata: () => "",
        acsUrl: null,
        entityId: null,
      }),
      getServiceProviderMetadata: () => "",
    },
  };
}

export const getJacksonConfig = () => null;

export type OAuthReq = {
  headers: any;
  query: any;
  body: any;
  tenant?: string;
};

export type SAMLResponsePayload = {
  RelayState?: string;
  SAMLResponse?: string;
};

export type OAuthTokenReq = {
  headers: any;
  body: any;
  client_id?: string;
};

export { jackson as default };
