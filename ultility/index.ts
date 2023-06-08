import { ILocale } from "@type/locale";

export const getPrefixImageUrl = (url?: string) => {
  return process.env.NEXT_PUBLIC_PREFIX_IMG_URL + (url || "");
};

export const getLanguageForApi = (locale: ILocale) => {
  const data = {
    vi: "vi-VN",
    en: "en",
  };
  return data[locale];
};

export const convertNewsTypeToURL = (type?: string) =>
  (type || "").replace("_", "-");

export const convertNewsUrlToType = (urlType?: string) =>
  (urlType || "").replace("-", "_");

export const numberWithDot = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
