/**
 * Stub scheduleSMSReminders for open-source version
 * workflows/api/scheduleSMSReminders - no-op in OSS
 */
import type { NextRequest } from "next/server";
import type { Params } from "app/_types";
import { NextResponse } from "next/server";

export const handler = async (_req: NextRequest, _args: { params: Promise<Params> }) => {
  // No-op for OSS - workflows disabled
  return NextResponse.json({});
};
