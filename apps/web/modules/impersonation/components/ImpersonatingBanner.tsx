import type { ReactElement } from "react";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { TopBanner } from "@calcom/ui/components/top-banner";

export type ImpersonatingBannerProps = {
  data: {
    username: string;
  };
};

function ImpersonatingBanner({ data }: ImpersonatingBannerProps): ReactElement {
  const { t } = useLocale();

  return (
    <TopBanner
      text={t("impersonating_user", { username: data.username })}
      variant="warning"
    />
  );
}

export default ImpersonatingBanner;
