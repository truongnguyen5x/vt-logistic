import { fetchAsset } from "@api/index";
import Banner from "@components/Banner";
import BreadCrumbs from "@components/Breadcrumbs";
import { ILocale } from "@configs/i18n";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { FC, Fragment } from "react";
import Pagination from "@components/pagination";
import { IPost } from "@type/post";
import { Card } from "../../../../components/news/Cards";
import NewsSideRight from "./NewsSideRight";
import PaginationNews from "./PaginationNews";
import ListNewsPage from "@components/news/ListPage";

type INewsAsset = {
  news: {
    banner: string;
    count: number;
    items: IPost[];
  };
};

type IDataHotNews = {
  hot_news: IPost[];
};

const ListNews = async ({ typeParams }: { typeParams: string }) => {
  let type = "";

  if (!!typeParams && typeParams === "market-news") {
    type = "market_news";
  } else if (!!typeParams && typeParams === "specialized-news") {
    type = "specialized_news";
  } else {
    type = "news";
  }

  const locale = useLocale();

  const [newsAsset, hotNews, t] = await Promise.all([
    fetchAsset<INewsAsset>(type, locale as ILocale),
    fetchAsset<IDataHotNews>("hot_news", locale as ILocale),
    getTranslations(type),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.news"), link: "#" },
    { title: t("title"), link: "#", active: true },
  ];

  return (
    <ListNewsPage
      type={type}
      banner={newsAsset.news.banner}
      title={t("title")}
      breadcrumbs={breadcrumbs}
      data={newsAsset.news.items}
      sideData={hotNews}
    />
  );
};

export default ListNews as unknown as FC<{ typeParams: string }>;
