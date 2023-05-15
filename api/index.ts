import "server-only";
import { ILocale } from "@configs/i18n";

export const fetchAsset = async (page: string, locale: ILocale) => {
  const res = await fetch(`${process.env.API_URL}/${page}/${locale}.json`, {
    cache: "no-cache",
  }).then((res) => res.json());
  return res;
};
