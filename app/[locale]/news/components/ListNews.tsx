import { fetchAsset } from "@api/index";
import { ILocale } from "@configs/i18n";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { FC, Fragment } from "react";
import { IPost, IPostCategory } from "@type/post";
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
  let category: IPostCategory = "internal_news";

  if (!!typeParams && typeParams === "market-news") {
    category = "market_news";
  } else if (!!typeParams && typeParams === "specialized-news") {
    category = "specialized_news";
  }
  const locale = useLocale();

  const [newsAsset, hotNews, t] = await Promise.all([
    fetchAsset<INewsAsset>(category, locale as ILocale),
    fetchAsset<IDataHotNews>("hot_news", locale as ILocale),
    getTranslations(category),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.news"), link: "#" },
    { title: t("title"), link: "#", active: true },
  ];

  return (
    <ListNewsPage
      category={category}
      banner={newsAsset.news.banner}
      title={t("title")}
      breadcrumbs={breadcrumbs}
      data={newsAsset.news.items}
      sideData={hotNews}
    />
  );
};

export default ListNews as unknown as FC<{ typeParams: string }>;
