import { fetchAsset } from "@api/index";
import Banner from "@components/Banner";
import BreadCrumbs from "@components/Breadcrumbs";
import { ILocale } from "@configs/i18n";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { FC, Fragment } from "react";
import { Card } from "./components/Cards";
import Pagination from "@components/pagination";
import PaginationNews from "./components/PaginationNews";
import NewsSideRight from "./components/NewsSideRight";
import { IPost } from "@type/post";

type INewsAsset = {
  news: {
    banner: string;
    count: number;
    items: IPost[];
  };
};

const News = async () => {
  const locale = useLocale();

  const [newsAsset, t] = await Promise.all([
    fetchAsset<INewsAsset>("news", locale as ILocale),
    getTranslations("news"),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.news"), link: "#" },
    { title: t("title"), link: "#", active: true },
  ];

  return (
    <Fragment>
      <Banner image={newsAsset.news.banner} title={t("title")} />
      <div className="container mx-auto mb-32">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-20" />
        <div className="flex items-start gap-[100px]">
          <div className="flex flex-col gap-[50px]">
            {!!newsAsset.news.items.length &&
              newsAsset.news.items.map((item, index) => (
                <Card post={item} key={index} />
              ))}
          </div>
          <NewsSideRight post={newsAsset.news.items} />
        </div>
        <PaginationNews />
      </div>
    </Fragment>
  );
};

export default News;
