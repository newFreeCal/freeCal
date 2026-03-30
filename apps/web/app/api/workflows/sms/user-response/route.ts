import handleSMSResponse from "@calcom/features/workflows/lib/stubs/handleSMSResponse";
import { defaultResponderForAppDir } from "app/api/defaultResponderForAppDir";

export const POST = defaultResponderForAppDir(handleSMSResponse);
