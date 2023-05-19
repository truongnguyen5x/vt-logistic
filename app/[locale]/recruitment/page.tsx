import { fetchAsset } from "@api/index";
import ListNewsPage from "@components/news/ListPage";
import { ILocale } from "@configs/i18n";
import { IPost } from "@type/post";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { FC } from "react";

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

const Recruitment = async () => {
  const locale = useLocale();

  const [newsAsset, hotNews, t] = await Promise.all([
    fetchAsset<INewsAsset>("recruitment", locale as ILocale),
    fetchAsset<IDataHotNews>("hot_news", locale as ILocale),
    getTranslations("recruitment"),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("title"), link: "#", active: true },
  ];

  return (
    <ListNewsPage
      category={"recruitment"}
      banner={newsAsset.news.banner}
      title={t("title")}
      breadcrumbs={breadcrumbs}
      data={newsAsset.news.items}
      sideData={hotNews}
    />
  );
};

export default Recruitment;
