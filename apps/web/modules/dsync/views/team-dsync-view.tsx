/**
 * Stub for open-source version
 * Replaces EE-only directory sync view
 */
import type { ReactElement } from "react";

export type DirectorySyncTeamViewProps = {
  permissions: {
    canEdit: boolean;
  };
};

export default function DirectorySyncTeamView({ permissions }: DirectorySyncTeamViewProps): ReactElement {
  return <></>;
}
