import type { ReactElement } from "react";

export type OrganizationsPrivacyProps = {
  permissions: {
    canRead: true;
    canEdit: boolean;
  };
  watchlistPermissions?: {
    canRead: boolean;
    canEdit: boolean;
  };
};

export default function OrganizationsPrivacy({
  permissions,
  watchlistPermissions,
}: OrganizationsPrivacyProps): ReactElement {
  return <></>;
}
