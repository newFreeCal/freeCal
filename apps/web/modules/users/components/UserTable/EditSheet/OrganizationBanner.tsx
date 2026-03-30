import { trpc } from "@calcom/trpc/react";

export function OrganizationBanner() {
  const {
    data: currentOrganisation,
    isPending: isPendingOrg,
    error,
  } = trpc.viewer.organizations.listCurrent.useQuery(undefined, {});

  const orgWithBanner = currentOrganisation as typeof currentOrganisation & { bannerUrl?: string | null };

  return (
    <>
      <div
        className="block w-full rounded-lg ring-1 ring-[#0000000F]"
        style={{
          background: "linear-gradient(to top right, var(--cal-bg-emphasis), var(--cal-bg))",
          height: orgWithBanner && orgWithBanner?.bannerUrl ? "auto" : "110px",
        }}>
        {orgWithBanner && orgWithBanner?.bannerUrl && (
          <img src={orgWithBanner?.bannerUrl} alt="Organization Banner" className="rounded-lg" />
        )}
      </div>
    </>
  );
}
