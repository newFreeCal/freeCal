/**
 * Stub LicenseKeyService for open-source version
 * License key checking is disabled in OSS
 */

export class LicenseKeySingleton {
  static getInstance(_deploymentRepo?: any): any {
    return {
      isLicenseValid: () => true,
      getLicenseKey: () => "",
      checkLicense: async () => true,
    };
  }
}

export default LicenseKeySingleton;
