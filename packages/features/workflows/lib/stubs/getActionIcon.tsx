/**
 * Stub getActionIcon for open-source version
 */
import { Icon } from "@calcom/ui/components/icon";
import type { WorkflowStep } from "./types";

export function getActionIcon(steps: WorkflowStep[], className?: string): React.ReactNode {
  if (steps.length === 0) {
    return <Icon name="zap" className={className ? className : "mr-1.5 inline h-3 w-3"} aria-hidden="true" />;
  }

  if (steps.length === 1) {
    return <Icon name="mail" className={className ? className : "mr-1.5 inline h-3 w-3"} aria-hidden="true" />;
  }

  return <Icon name="activity" className={className ? className : "mr-1.5 inline h-3 w-3"} aria-hidden="true" />;
}
