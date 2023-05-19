import "server-only";
import { ILocale } from "@configs/i18n";
import { IDetailPost, IPost } from "@type/post";

export const fetchAsset = async <T = unknown>(
  page: string,
  locale: ILocale
) => {
  const res: T = await fetch(`${process.env.API_URL}/${page}/${locale}.json`, {
    cache: process.env.NODE_ENV == "development" ? "no-store" : "default",
  }).then((res) => res.json());
  return res;
};

export const fetchHomePost = async (locale: ILocale) => {
  const res: IPost[] = await fetch(
    `${process.env.API_URL}/home_post/${locale}.json`,
    {
      cache: process.env.NODE_ENV == "development" ? "no-store" : "default",
    }
  ).then((res) => res.json());
  return res;
};

export const fetchDetailPost = async (locale: ILocale) => {
  const res: IDetailPost = await fetch(
    `${process.env.API_URL}/post_detail/${locale}.json`,
    {
      cache: process.env.NODE_ENV == "development" ? "no-store" : "default",
    }
  ).then((res) => res.json());
  return res;
};
