import type { ReactElement } from "react";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { TopBanner } from "@calcom/ui/components/top-banner";
import Link from "next/link";

export type DueInvoiceBannerProps = {
  data: {
    daysUntilDue?: number;
    amountDue?: number;
    invoiceUrl?: string;
  };
};

function DueInvoiceBanner({ data }: DueInvoiceBannerProps): ReactElement {
  const { t } = useLocale();
  const { daysUntilDue, amountDue, invoiceUrl } = data;

  return (
    <TopBanner
      icon="circle-alert"
      text={t("invoice_due_banner_text", {
        daysUntilDue: daysUntilDue?.toString() || "0",
        amountDue: amountDue?.toString() || "0",
      })}
      variant="warning"
      actions={
        invoiceUrl && (
          <Link href={invoiceUrl} className="border-b border-b-black">
            {t("view_invoice")}
          </Link>
        )
      }
    />
  );
}

export { DueInvoiceBanner };
