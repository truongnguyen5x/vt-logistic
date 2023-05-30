import { i18n } from "@configs/i18n";
import { LOCALES } from "@ultility/constant";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES.map((i) => i.lang),

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: i18n.defaultLocale,
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|js|.*\\..*).*)"],
};
