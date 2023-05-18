import { fetchAsset } from "@api/index";
import Banner from "@components/Banner";
import BreadCrumbs from "@components/Breadcrumbs";
import { ILocale } from "@configs/i18n";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { FC, Fragment } from "react";
import Pagination from "@components/pagination";
import { IPost } from "@type/post";
import { Card } from "./Cards";
import NewsSideRight from "./NewsSideRight";
import PaginationNews from "./PaginationNews";

type INewsAsset = {
  news: {
    banner: string;
    count: number;
    items: IPost[];
  };
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

  const [newsAsset, t] = await Promise.all([
    fetchAsset<INewsAsset>(type, locale as ILocale),
    getTranslations(type),
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
          {/* @ts-expect-error Server Component */}
          <NewsSideRight />
        </div>
        <PaginationNews />
      </div>
    </Fragment>
  );
};

export default ListNews;
