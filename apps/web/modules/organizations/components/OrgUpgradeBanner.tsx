import type { ReactElement } from "react";

export function OrgUpgradeBanner({ data }: OrgUpgradeBannerProps): ReactElement {
  return <></>;
}

export type OrgUpgradeBannerProps = {
  data: {
    orgName: string;
    orgUrl: string;
  };
};
