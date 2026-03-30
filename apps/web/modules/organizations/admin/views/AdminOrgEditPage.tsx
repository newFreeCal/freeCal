import type { ReactElement } from "react";

export function AdminOrgEditPage() {
  return <></>;
}

export type OrgFormProps = {
  org: { id: number; slug: string; name: string | null; isPlatform: boolean };
};

export function OrgForm({ org }: OrgFormProps): ReactElement {
  return <></>;
}

export default AdminOrgEditPage;
