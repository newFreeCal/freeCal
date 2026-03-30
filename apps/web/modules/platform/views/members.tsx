interface Platform {
  id: number;
  slug: string;
  name: string | null;
  isPlatform: boolean;
  features?: { delegationCredential: boolean };
  organizationSettings?: any;
  requestedSlug?: string;
}

interface Team {
  id: number;
  slug: string;
  name: string;
  isOrganization: boolean;
  organizationSettings?: any;
  requestedSlug?: string;
  isPlatform?: boolean;
}

export default function PlatformMembersView({
  org,
  teams,
}: {
  org: Platform | null;
  teams: Team[];
}) {
  return <></>;
}
