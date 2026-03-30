import type { Dispatch, SetStateAction } from "react";

interface MeetingSessionDetailsDialogProps {
  booking?: any;
  isOpenDialog: boolean;
  setIsOpenDialog: Dispatch<SetStateAction<boolean>>;
  timeFormat: number | null;
}

export function MeetingSessionDetailsDialog({ isOpenDialog }: MeetingSessionDetailsDialogProps) {
  return <></>;
}
