import "server-only";
import { ILOCALE } from "@type/locale";

export const fetchAsset = async (page: string, locale: ILOCALE) => {
  const res = await fetch(`${process.env.API_URL}/${page}/${locale}.json`).then(
    (res) => res.json()
  );
  return res;
};
