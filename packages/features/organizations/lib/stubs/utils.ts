/**
 * Stub utils for open-source version
 */
export const orgUtils = {
  validateOrgName: (_name: string): boolean => true,
  validateOrgSlug: (_slug: string): boolean => true,
  generateOrgSlug: (_name: string): string => "default-org",
};

export const isCompanyEmail = (_email: string): boolean => false;
