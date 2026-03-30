/**
 * Stub for open-source version
 * Replaces EE-only ApiKeyListItem component
 */

import type { ReactElement } from "react";

export type TApiKeys = {
  id: string;
  userId: number;
  teamId?: number;
  note?: string | null;
  createdAt: Date;
  expiresAt?: Date | null;
  lastUsedAt?: Date | null;
  hashedKey: string;
  appId?: string | null;
};

interface ApiKeyListItemProps {
  key: any;
  apiKey: TApiKeys;
  lastItem: boolean;
  onEditClick: () => void;
}

export default function ApiKeyListItem({}: ApiKeyListItemProps): ReactElement | null {
  return null;
}
