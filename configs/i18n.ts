import { LOCALES } from "@ultility/constant";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../dictionaries/${locale}.json`)).default,
}));

export const i18n = {
  defaultLocale: "vi",
  locales: ["en", "vi"],
} as const;

export type ILocale = (typeof i18n)["locales"][number];
