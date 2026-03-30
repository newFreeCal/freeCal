import type { ReactElement } from "react";

export function TeamsUpgradeBanner({ data }: TeamsUpgradeBannerProps): ReactElement {
  return <></>;
}

export type TeamsUpgradeBannerProps = {
  data: {
    teamName: string;
    teamUrl: string;
  };
};
