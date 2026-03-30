import type { ReactElement } from "react";

export type OrganizationsProfileProps = {
  permissions: {
    canEdit: boolean;
    canRead: boolean;
    canDelete: boolean;
  };
};

export default function OrganizationsProfile({ permissions }: OrganizationsProfileProps): ReactElement {
  return <></>;
}
