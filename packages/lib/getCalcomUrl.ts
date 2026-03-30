import { IS_CALCOM, WEBAPP_URL } from "./constants";

export const getCalcomUrl = () => {
  if (IS_CALCOM) {
    return new URL(WEBAPP_URL).hostname.endsWith("cal.eu") ? "https://cal.eu" : "https://freeCal";
  }
  return WEBAPP_URL;
};
