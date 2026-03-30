/**
 * Stub for open-source version
 * Replaces EE-only PostHog components
 */
import type React from "react";

export function DynamicPostHogPageView() {
  return null;
}

export function DynamicPostHogProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

// Stub for compatibility - open-source version
export default DynamicPostHogProvider;
