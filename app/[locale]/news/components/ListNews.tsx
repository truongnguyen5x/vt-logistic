import { ILocale } from "@type/locale";
import { useLocale } from "next-intl";
import { FC } from "react";
import { getTranslations } from "next-intl/server";
import ListNewsPage from "@components/news/ListPage";
import { getClient } from "@graphql/graphql-client";
import { gql } from "@generated/gql";
import {
  getBannerNewQueryString,
  getNewQueryString,
} from "@graphql/new.graghql";
import {
  convertNewsUrlToType,
  getLanguageForApi,
  getPrefixImageUrl,
} from "@ultility/index";
import {
  Enum_Listnew_Type,
  Enum_News_Type,
  ListNewEntity,
  Maybe,
  NewsEntity,
} from "@generated/graphql";
import { ISearchParams } from "@type/common";

export type Filter = {
  keyword?: string;
  type?: string;
  is_hot?: boolean;
  slug?: string;
};

export type Pagination = {
  page: number;
};

const getNewAsset = async (
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
        type: { eq: filter.type },
        is_hot: { eq: filter.is_hot },
      },
      pagination: { page: pagination.page, pageSize: 3 },
    },
  });

  // get last element
  return data.newss;
};

const getBannerNewAsset = async (locale: ILocale, type: Enum_News_Type) => {
  const { data } = await getClient().query({
    query: gql(getBannerNewQueryString),
    variables: {
      locale: getLanguageForApi(locale),
      filter: { type: { eq: type } },
    },
  });

  // get last element
  return data.listNews?.data?.[0];
};

const ListNews = async ({
  typeParams,
  page,
  keyword,
}: {
  typeParams: string;
  page: number;
  keyword: string;
}) => {
  let category: Enum_News_Type = !!typeParams
    ? (convertNewsUrlToType(typeParams) as Enum_News_Type)
    : Enum_News_Type.InternalNews;

  const locale = useLocale();

  const [newsAsset, hotNews, banner, t] = await Promise.all([
    getNewAsset(
      locale as ILocale,
      { keyword: keyword, type: category },
      { page: Number(page) }
    ),
    getNewAsset(
      locale as ILocale,
      { keyword: "", type: category, is_hot: true },
      { page: 1 }
    ),
    getBannerNewAsset(locale as ILocale, category),
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
      banner={getPrefixImageUrl(banner?.attributes?.banner?.data?.attributes?.url)}
      title={t("title")}
      breadcrumbs={breadcrumbs}
      data={newsAsset?.data as Maybe<NewsEntity[]>}
      sideData={{ hot_news: hotNews?.data as Maybe<NewsEntity[]> }}
      totalCount={newsAsset?.meta.pagination.total as number}
      searchPlaceholder={t("search_placeholder")}
      hotNewsTxt={t("hot_news")}
      noDataTxt={t("no_data")}
    />
  );
};

export default ListNews as unknown as FC<{
  typeParams: string;
  page: number;
  keyword: string;
}>;
