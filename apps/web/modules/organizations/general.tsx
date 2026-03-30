import type { ReactElement } from "react";

export type OrganizationsGeneralProps = {
  permissions: {
    canRead: boolean;
    canEdit: boolean;
  };
};

export default function OrganizationsGeneral({ permissions }: OrganizationsGeneralProps): ReactElement {
  return <></>;
}
