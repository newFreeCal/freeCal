import { handler } from "@calcom/features/workflows/lib/stubs/scheduleEmailReminders";
import { defaultResponderForAppDir } from "app/api/defaultResponderForAppDir";

export const POST = defaultResponderForAppDir(handler);
