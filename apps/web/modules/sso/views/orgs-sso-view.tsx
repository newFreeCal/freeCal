/**
 * Stub for open-source version
 * Replaces EE-only sso view
 */
import type { ReactElement } from "react";

export type OrgSSOViewProps = {
  permissions: {
    canEdit: boolean;
  };
};

export default function OrgSSOView({ permissions }: OrgSSOViewProps): ReactElement {
  return <></>;
}
