import { ILocale } from "@configs/i18n";
import { useLocale } from "next-intl";
import { FC } from "react";
import { getTranslations } from "next-intl/server";
import { IPostCategory } from "@type/post";
import ListNewsPage from "@components/news/ListPage";
import { getClient } from "@api/graphql-client";
import { gql } from "@generated/gql";
import { getBannerNewQueryString, getNewQueryString } from "@api/new.graghql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";
import { ListNewEntity, Maybe, NewsEntity } from "@generated/graphql";
import { ISearchParams } from "@type/common";

export type Filter = {
  keyword?: string
  type?: string
  is_hot?: boolean
  slug?: string
}

export type Pagination = {
  page: number
}

const getNewAsset = async (locale: ILocale, filter: Filter, pagination: Pagination) => {
  const { data } = await getClient().query({
    query: gql(getNewQueryString),
    variables: { locale: getLanguageForApi(locale), filter: {title: { contains: filter.keyword }, type: { eq: filter.type }, is_hot: { eq: filter.is_hot }}, pagination: { page: pagination.page, pageSize: 3 } },
  });

  // get last element
  return data.newss;
};

const getBannerNewAsset = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getBannerNewQueryString),
    variables: { locale: getLanguageForApi(locale) },
  });

  // get last element
  return data.listNews?.data;
};


const ListNews = async ({ typeParams, page, keyword }: { typeParams: string, page: number, keyword: string }) => {
  let category: IPostCategory = "internal_news";
  
  if (!!typeParams && typeParams === "market-news") {
    category = "market_news";
  } else if (!!typeParams && typeParams === "specialized-news") {
    category = "specialized_news";
  }
  const locale = useLocale();
  
  const [newsAsset, hotNews, listBanner, t] = await Promise.all([
    getNewAsset(locale as ILocale, {keyword: keyword, type: category}, {page: Number(page)}),
    getNewAsset(locale as ILocale, {keyword: '', type: category, is_hot: true}, {page: 1}),
    getBannerNewAsset(locale as ILocale),
    getTranslations(category),
  ]);

  const banner = () => {
    const ojBanner: ListNewEntity | null = !!listBanner?.length ? listBanner.find(item => item.attributes?.type === category) as Maybe<ListNewEntity> | null : null

    return ojBanner?.attributes?.banner?.data?.attributes?.url
  }

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.news"), link: "#" },
    { title: t("title"), link: "#", active: true },
  ];

  return (
    <ListNewsPage
      category={category}
      banner={getPrefixImageUrl(banner())}
      title={t("title")}
      breadcrumbs={breadcrumbs}
      data={newsAsset?.data as Maybe<NewsEntity[]>}
      sideData={{hot_news: hotNews?.data as Maybe<NewsEntity[]>}}
      totalCount={newsAsset?.meta.pagination.total as number}
      />
  );
};

export default ListNews as unknown as FC<{ typeParams: string, page: number, keyword: string }>;
