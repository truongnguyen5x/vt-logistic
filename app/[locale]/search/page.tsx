import { ISearchParams } from "@type/common";
import styles from "./style.module.scss";
import { useLocale } from "next-intl";
import { ILocale } from "@type/locale";
import { Filter, Pagination } from "@app/news/components/ListNews";
import { getClient } from "@graphql/graphql-client";
import {
  getBannerNewQueryString,
  getNewQueryString,
} from "@graphql/new.graghql";
import { gql } from "@generated/gql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";
import { getTranslations } from "next-intl/server";
import {
  Enum_Listnew_Type,
  ListNewEntity,
  Maybe,
  NewsEntity,
} from "@generated/graphql";
import { Fragment } from "react";
import Banner from "@components/Banner";
import BreadCrumbs from "@components/Breadcrumbs";
import { Card, SideCard } from "@components/news/Cards";
import NoResult from "@components/NoResult";
import PaginationNews from "@components/news/PaginationNews";

const getNewsAsset = async (
  locale: ILocale,
  filter: Filter,
  pagination: Pagination
) => {
  const { data } = await getClient().query({
    query: gql(getNewQueryString),
    variables: {
      locale: getLanguageForApi(locale),
      filter: {
        title: { contains: filter.keyword },
      },
      pagination: { page: pagination.page, pageSize: 10 },
    },
  });

  // get last element
  return data.newss;
};

const getBannerNewAsset = async (locale: ILocale, type: Enum_Listnew_Type) => {
  const { data } = await getClient().query({
    query: gql(getBannerNewQueryString),
    variables: {
      locale: getLanguageForApi(locale),
      filter: { type: { eq: type } },
    },
  });
  return data.listNews?.data?.[0];
};

const SearchPage = async ({
  searchParams,
}: {
  searchParams: ISearchParams;
}) => {
  const locale = useLocale();

  const [searchNews, banner, t] = await Promise.all([
    getNewsAsset(
      locale as ILocale,
      { keyword: searchParams.keyword },
      { page: Number(searchParams.page) }
    ),
    getBannerNewAsset(locale as ILocale, Enum_Listnew_Type.InternalNews),
    getTranslations("search"),
  ]);



  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    {
      title: `${t("breadcrumb")} "${searchParams.keyword}"`,
      link: "#",
      active: true,
    },
  ];

  return (
    <Fragment>
      <Banner image={getPrefixImageUrl(banner?.attributes?.banner.data?.attributes?.url)} title={t("title")} />
      <div className="container mx-auto mb-10 lg:mb-32">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="my-6 xl:mb-20" />
        <div className="grid grid-cols-2 gap-[50px] max-lg:hidden">
          {!!searchNews?.data?.length &&
            searchNews?.data?.map((item, index) => (
              <Card
                post={item as NewsEntity}
                key={index}
                className="animation"
                category={item.attributes?.type}
              />
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden ">
          {!!searchNews?.data?.length &&
            searchNews.data.map((news, index) => (
              <SideCard
                post={news as NewsEntity}
                key={index}
                className="animation"
                category={news.attributes?.type}
              />
            ))}
        </div>
        {!searchNews?.data.length && <NoResult txt={t("no_data")} />}
        <PaginationNews
          totalCount={searchNews?.meta.pagination.total as number}
          pageSize={10}
        />
      </div>
    </Fragment>
  );
};

export default SearchPage;
