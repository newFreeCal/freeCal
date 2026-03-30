// Stub for teams components - replace with your own implementation
import type { ReactElement } from "react";

// Import ProfileOption from the actual file
type ProfileOption = {
  teamId: number | null | undefined;
  label: string | null;
  image: string;
  membershipRole: any | null | undefined;
  slug: string | null;
  permissions: {
    canCreateEventType: boolean;
  };
};

export type CreateButtonProps = {
  subtitle?: string;
  "data-testid"?: string;
  options?: ProfileOption[];
  createDialog?: () => ReactElement;
};

export function CreateButton({}: CreateButtonProps): ReactElement {
  return <></>;
}
