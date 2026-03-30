import type { MembershipRole } from "@calcom/prisma/enums";

type MemberChangeRoleModalProps = {
  isOpen: boolean;
  currentMember: MembershipRole;
  teamId: number;
  memberId: number;
  initialRole: MembershipRole;
  onExit: () => void;
};

export default function MemberChangeRoleModal(_props: MemberChangeRoleModalProps) {
  return <></>;
}
