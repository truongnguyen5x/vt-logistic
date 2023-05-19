import { ILocale } from "@configs/i18n";

export const fetchFromClient = async <T = unknown>(
  page: string,
  locale: ILocale
) => {
  const res: T = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${page}/${locale}.json`,
    { cache: "no-store" }
  ).then((res) => res.json());
  return res;
};
