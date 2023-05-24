import { ILocale } from "@configs/i18n";

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
