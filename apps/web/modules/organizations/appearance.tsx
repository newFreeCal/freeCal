/**
 * Stub for open-source version
 * Replaces EE-only profile views
 */
import type { ReactElement } from "react";

export type OrganizationAppearanceViewProps = {
  permissions: {
    canRead: true;
    canEdit: boolean;
  };
  watchlistPermissions?: ResourcePermissions;
};

export type ResourcePermissions = {
  canRead: boolean;
  canEdit: boolean;
};

export function AppearanceView() {
  return <></>;
}

export function PrivacyView({ permissions, watchlistPermissions }: OrganizationAppearanceViewProps): ReactElement {
  return <></>;
}

export function ProfileView() {
  return <></>;
}

export default AppearanceView;
