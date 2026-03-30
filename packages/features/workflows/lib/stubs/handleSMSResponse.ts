/**
 * Stub handleSMSResponse for open-source version
 * workflows/api/handleSMSResponse - no-op in OSS
 */
import { NextResponse } from "next/server";

const handler = async (_args: any): Promise<NextResponse> => {
  // No-op for OSS - workflows disabled
  return NextResponse.json({ status: "ok" });
};

export default handler;
