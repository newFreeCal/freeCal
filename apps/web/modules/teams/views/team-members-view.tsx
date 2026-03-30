import { MembershipRole } from "@calcom/prisma/enums";

interface Team {
  id: number;
  name: string | null;
  slug: string;
  isOrganization: boolean;
  isPrivate: boolean;
  parent?: { id: number; name?: string; slug?: string } | null;
  membership: {
    role: MembershipRole;
    accepted: boolean;
  };
}

interface AttributeOption {
  id: string;
  value: string;
  slug: string;
}

interface Attribute {
  id: string;
  name: string;
  options: AttributeOption[];
}

interface FacetedAttribute {
  id: string;
  name: string;
  options: Array<{ value: string }>;
}

interface FacetedTeamValues {
  roles: { id: string; name: string }[];
  teams: Team[];
  attributes: FacetedAttribute[];
}

interface MemberPermissions {
  canListMembers: boolean;
  canInvite: boolean;
  canChangeMemberRole: boolean;
  canRemove: boolean;
  canImpersonate: boolean;
  canResetPassword?: boolean;
  canEditAttributesForUser?: boolean;
  canViewAttributes?: boolean;
}

export function TeamMembersView({
  team,
  facetedTeamValues,
  attributes,
  permissions,
}: {
  team: Team;
  facetedTeamValues: FacetedTeamValues;
  attributes: Attribute[];
  permissions: MemberPermissions;
}) {
  return <></>;
}
