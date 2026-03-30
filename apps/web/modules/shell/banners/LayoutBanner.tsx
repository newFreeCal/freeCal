import {
  DueInvoiceBanner,
  type DueInvoiceBannerProps,
} from "@calcom/web/modules/billing/components/DueInvoiceBanner";
import ImpersonatingBanner, {
  type ImpersonatingBannerProps,
} from "@calcom/web/modules/impersonation/components/ImpersonatingBanner";
import {
  OrgUpgradeBanner,
  type OrgUpgradeBannerProps,
} from "@calcom/web/modules/organizations/components/OrgUpgradeBanner";
import {
  TeamsUpgradeBanner,
  type TeamsUpgradeBannerProps,
} from "@calcom/web/modules/teams/components/TeamsUpgradeBanner";
import AdminPasswordBanner, {
  type AdminPasswordBannerProps,
} from "@calcom/web/modules/users/components/AdminPasswordBanner";
import CalendarCredentialBanner, {
  type CalendarCredentialBannerProps,
} from "@calcom/web/modules/users/components/CalendarCredentialBanner";
import {
  InvalidAppCredentialBanners,
  type InvalidAppCredentialBannerProps,
} from "@calcom/web/modules/users/components/InvalidAppCredentialsBanner";
import VerifyEmailBanner, {
  type VerifyEmailBannerProps,
} from "@calcom/web/modules/users/components/VerifyEmailBanner";
import type { SessionContextValue } from "next-auth/react";
import type { Membership } from "@calcom/prisma/client";

type BannerTypeProps = {
  teamUpgradeBanner: {
    team: {
      id: number;
      name: string;
      slug: string | null;
      metadata: any;
      isOrganization: boolean;
    };
  }[];
  orgUpgradeBanner: {
    team: {
      id: number;
      name: string;
      slug: string | null;
      metadata: any;
      isOrganization: boolean;
    };
  }[];
  verifyEmailBanner: boolean;
  adminPasswordBanner: SessionContextValue["data"];
  impersonationBanner: SessionContextValue["data"];
  calendarCredentialBanner: boolean;
  invalidAppCredentialBanners: InvalidAppCredentialBannerProps[];
  dueInvoiceBanner: {
    daysUntilDue?: number;
    amountDue?: number;
    invoiceUrl?: string;
  } | null;
};

type BannerType = keyof BannerTypeProps;

type BannerComponent = {
  [Key in BannerType]: (props: BannerTypeProps[Key]) => JSX.Element;
};

export type AllBannerProps = { [Key in BannerType]: BannerTypeProps[Key] };

export const BannerComponent: BannerComponent = {
  teamUpgradeBanner: (teams: BannerTypeProps["teamUpgradeBanner"]) => (
    <>
      {teams.map((item) => (
        <TeamsUpgradeBanner
          key={item.team.id}
          data={{
            teamName: item.team.name || "",
            teamUrl: `/teams/${item.team.slug}`,
          }}
        />
      ))}
    </>
  ),
  orgUpgradeBanner: (orgs: BannerTypeProps["orgUpgradeBanner"]) => (
    <>
      {orgs.map((item) => (
        <OrgUpgradeBanner
          key={item.team.id}
          data={{
            orgName: item.team.name || "",
            orgUrl: `/org/${item.team.slug}`,
          }}
        />
      ))}
    </>
  ),
  verifyEmailBanner: (data: BannerTypeProps["verifyEmailBanner"]) => (
    <VerifyEmailBanner data={data} />
  ),
  adminPasswordBanner: (data: BannerTypeProps["adminPasswordBanner"]) => (
    <AdminPasswordBanner data={data} />
  ),
  impersonationBanner: (data: BannerTypeProps["impersonationBanner"]) => (
    <ImpersonatingBanner
      data={{
        username: data?.user?.username || "",
      }}
    />
  ),
  calendarCredentialBanner: (data: BannerTypeProps["calendarCredentialBanner"]) => (
    <CalendarCredentialBanner data={data} />
  ),
  invalidAppCredentialBanners: (apps: BannerTypeProps["invalidAppCredentialBanners"]) => (
    <InvalidAppCredentialBanners data={apps} />
  ),
  dueInvoiceBanner: (data: BannerTypeProps["dueInvoiceBanner"]) => (
    <DueInvoiceBanner data={data || {}} />
  ),
};

interface BannerContainerProps {
  banners: AllBannerProps;
}

export const BannerContainer: React.FC<BannerContainerProps> = ({ banners }) => {
  return (
    <div className="sticky top-0 z-10 w-full divide-y divide-black">
      {banners.teamUpgradeBanner.length > 0 && BannerComponent.teamUpgradeBanner(banners.teamUpgradeBanner)}
      {banners.orgUpgradeBanner.length > 0 && BannerComponent.orgUpgradeBanner(banners.orgUpgradeBanner)}
      {banners.verifyEmailBanner && BannerComponent.verifyEmailBanner(banners.verifyEmailBanner)}
      {banners.adminPasswordBanner && BannerComponent.adminPasswordBanner(banners.adminPasswordBanner)}
      {banners.impersonationBanner && BannerComponent.impersonationBanner(banners.impersonationBanner)}
      {banners.calendarCredentialBanner && BannerComponent.calendarCredentialBanner(banners.calendarCredentialBanner)}
      {banners.invalidAppCredentialBanners.length > 0 && BannerComponent.invalidAppCredentialBanners(banners.invalidAppCredentialBanners)}
      {banners.dueInvoiceBanner && BannerComponent.dueInvoiceBanner(banners.dueInvoiceBanner)}
    </div>
  );
};
