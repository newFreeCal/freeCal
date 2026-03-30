/**
 * Stub for open-source version
 * Replaces EE-only guest notifications view
 */
import type { ReactElement } from "react";

export type GuestNotificationsViewProps = {
  permissions: {
    canRead: true;
    canEdit: boolean;
  };
};

export default function GuestNotificationsView({ permissions }: GuestNotificationsViewProps): ReactElement {
  return <></>;
}
