/**
 * Stub for open-source version
 * Replaces EE-only MemberInvitationModal component
 */
import type { FC } from "react";

interface MemberInvitationModalProps {
  teamId: number;
  isOpen?: boolean;
  onExit?: () => void;
  isOrg?: boolean;
  isPending?: boolean;
  onSubmit?: (values: any) => void;
  members?: any[];
  showMemberInvitationModal?: boolean;
  hideInvitationModal?: () => void;
  onSettingsOpen?: () => void;
}

export const MemberInvitationModalWithoutMembers: FC<MemberInvitationModalProps> = () => {
  return <></>;
};

export const MemberInvitationModal: FC<MemberInvitationModalProps> = () => {
  return <></>;
};

// Stub for compatibility - open-source version
export default MemberInvitationModal;
