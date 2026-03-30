/**
 * Stub getTeamData for open-source version
 */
export const getTeamData = (_teamSlug: string, _orgSlug?: string | null): any => {
  return null;
};

export type TeamData = {
  id: number;
  name: string;
  slug: string;
  parent: {
    bannerUrl?: string | null;
    hideBranding: boolean | null;
  } | null;
  hideBranding: boolean | null;
  isPrivate?: boolean;
  [key: string]: any;
};
