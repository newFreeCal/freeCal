/**
 * Stub for open-source version
 * Replaces EE-only CreateButtonWithTeamsList component
 */
export type CreateButtonWithTeamsListProps = {
  subtitle?: string;
  createFunction: (teamId?: number, platform?: boolean) => void;
  withPermission?: {
    permission: string;
    fallbackRoles: string[];
  };
  color?: string;
  dataTestId?: string;
  includeOrg?: boolean;
};

export const CreateButtonWithTeamsList = ({
  subtitle,
  createFunction,
  withPermission,
  color = "primary",
  dataTestId,
  includeOrg = false,
}: CreateButtonWithTeamsListProps) => {
  return <></>;
};
