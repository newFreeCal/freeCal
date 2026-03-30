/**
 * Stub urlScanner for open-source version
 */

type ScanResult =
  | { status: "pending" }
  | { status: "error"; error?: string }
  | { status: "scanned"; malicious: boolean; categories?: string[] };

export const extractUrlsFromHtml = (_html: string): string[] => [];
export const getScanResult = (_scanId: string): ScanResult =>
  ({ status: "scanned", malicious: false }) as const;
export const isUrlScanningEnabled = (): boolean => false;
export const submitUrlForScanning = (_url: string): { scanId: string } | { error: string } => ({
  scanId: "stub-scan-id",
});

export const urlScanner = {
  scanUrls: (): string[] => [],
  isValidUrl: (_url: string): boolean => false,
};
