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

type INew = {
  created_at: string;
  image: string;
  title: string;
  content?: string;
};

type INews = {
  news: {
    banner: string;
    count: number;
    items: INew[];
  };
};

const News = async () => {
  const locale = useLocale();
  const t = await getTranslations("news");

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.news"), link: "#" },
    { title: t("title"), link: "#", active: true },
  ];

  const data: INews = await fetchAsset("news", locale as ILocale);

  return (
    <Fragment>
      <Banner image={data.news.banner} title={t("title")} />
      <div className="container mx-auto mb-32">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-20" />
        <div className="flex items-start gap-[100px]">
          <div className="flex flex-col gap-[50px]">
            {!!data.news.items.length &&
              data.news.items.map((item, index) => (
                <Card
                  data={{ ...item, link: `news/${item.title}` }}
                  key={index}
                />
              ))}
          </div>
          <NewsSideRight data={data.news.items} />
        </div>
        <PaginationNews />
      </div>
    </Fragment>
  );
};

export default News;
