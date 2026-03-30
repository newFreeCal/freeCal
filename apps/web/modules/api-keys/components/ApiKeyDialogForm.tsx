/**
 * Stub for open-source version
 * Replaces EE-only ApiKeyDialogForm component
 */

import type { ReactElement } from "react";
import type { TApiKeys } from "./ApiKeyListItem";

interface ApiKeyDialogFormProps {
  handleClose: () => void;
  defaultValues?: TApiKeys & { neverExpires?: boolean };
}

export default function ApiKeyDialogForm({ handleClose, defaultValues }: ApiKeyDialogFormProps): ReactElement {
  return <></>;
}
