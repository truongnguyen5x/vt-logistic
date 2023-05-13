import { LIST_LOCALE } from "@ultility/constant";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: LIST_LOCALE,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "vi",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
