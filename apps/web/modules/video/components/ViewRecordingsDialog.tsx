/**
 * Stub for open-source version
 * Replaces EE-only component
 */
interface ViewRecordingsDialogProps {
  booking?: any;
  isOpenDialog: boolean;
  setIsOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  timeFormat: number | null;
}

export default function ViewRecordingsDialog({ isOpenDialog }: ViewRecordingsDialogProps) {
  // In open-source version, no recordings feature
  return <></>;
}
