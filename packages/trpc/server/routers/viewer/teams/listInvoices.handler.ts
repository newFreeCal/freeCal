import logger from "@calcom/lib/logger";
import type { TrpcSessionUser } from "../../../types";
import type { TListInvoicesInputSchema } from "./listInvoices.schema";

const log = logger.getSubLogger({ prefix: ["listInvoices"] });

type ListInvoicesOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TListInvoicesInputSchema;
};

export interface InvoiceLineItem {
  id: string;
  description: string | null;
  amount: number;
  quantity: number | null;
}

export interface InvoicePaymentMethod {
  type: string;
  card?: {
    last4: string;
    brand: string;
  };
}

export interface Invoice {
  id: string;
  number: string | null;
  created: number;
  amountDue: number;
  amountPaid: number;
  currency: string;
  status: string | null;
  hostedInvoiceUrl: string | null;
  invoicePdf: string | null;
  lineItems: InvoiceLineItem[];
  description: string | null;
  paymentMethod: InvoicePaymentMethod | null;
}

export const listInvoicesHandler = async ({ ctx, input }: ListInvoicesOptions) => {
  log.debug("listInvoices called - billing disabled in open-source version");
  return { invoices: [] as Invoice[], hasMore: false, nextCursor: null };
};

export default listInvoicesHandler;
