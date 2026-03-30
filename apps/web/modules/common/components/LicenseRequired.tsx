/**
 * Stub for open-source version
 * Replaces EE-only component
 */
export default function LicenseRequired({ children }: { children: React.ReactNode }) {
  // In open-source version, no license required - render children
  return <>{children}</>;
}
