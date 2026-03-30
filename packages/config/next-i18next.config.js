import process from "node:process";
import i18nConfig from "../../i18n.json" with { type: "json" };

/** @type {import("next-i18next").UserConfig} */
const config = {
  i18n: {
    defaultLocale: i18nConfig.locale.source,
    locales: i18nConfig.locale.targets.concat([i18nConfig.locale.source]),
  },
  fallbackLng: {
    default: ["en"],
    zh: ["zh-CN"],
  },
  reloadOnPrerender: process.env.NODE_ENV !== "production",
};

export const i18n = config.i18n;
export default config;
