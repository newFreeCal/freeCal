/**
 * Stub for open-source version
 * Replaces EE-only attributes view
 */
import type { ReactElement } from "react";

export type OrgSettingsAttributesPageProps = {
  permissions: {
    canEdit: boolean;
    canDelete: boolean;
    canCreate: boolean;
  };
};

export default function OrgSettingsAttributesPage({ permissions }: OrgSettingsAttributesPageProps): ReactElement {
  return <></>;
}
