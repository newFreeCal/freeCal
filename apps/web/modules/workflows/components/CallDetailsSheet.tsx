import { Fragment, type Dispatch } from "react";

import type { CallDetailsAction, CallDetailsState } from "@calcom/features/workflows/lib/stubs/types";

interface CallDetailsSheetProps {
  state: CallDetailsState;
  dispatch: Dispatch<CallDetailsAction>;
}

export function CallDetailsSheet({ state, dispatch }: CallDetailsSheetProps): JSX.Element {
  // Stub - the full implementation was removed during open-source migration
  // This component would show call details in the EE version
  return <Fragment />;
}

export default CallDetailsSheet;
