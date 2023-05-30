import { getClient } from "@api/graphql-client";
import { fetchAsset } from "@api/index";
import { getBannerNewQueryString, getNewQueryString } from "@api/new.graghql";
import { Filter, Pagination } from "@app/news/components/ListNews";
import ListNewsPage from "@components/news/ListPage";
import { ILocale } from "@configs/i18n";
import { gql } from "@generated/gql";
import { ListNewEntity, Maybe, NewsEntity } from "@generated/graphql";
import { ISearchParams } from "@type/common";
import { IPost } from "@type/post";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";

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

const getRecruimentAsset = async (locale: ILocale, filter: Filter, pagination: Pagination) => {
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


const Recruitment = async ({searchParams}: {searchParams: ISearchParams}) => {
  const locale = useLocale();
  
  const [newsAsset, hotNews, listBanner, t] = await Promise.all([
    getRecruimentAsset(locale as ILocale, {keyword: searchParams.keyword, type: 'recruitment'}, {page: Number(searchParams.page)}),
    getRecruimentAsset(locale as ILocale, {keyword: '', type: 'recruitment', is_hot: true}, {page: 1}),
    getBannerNewAsset(locale as ILocale),
    getTranslations("recruitment"),
  ]);

  const banner = () => {
    const ojBanner: ListNewEntity | null = !!listBanner?.length ? listBanner.find(item => item.attributes?.type === 'recruitment') as Maybe<ListNewEntity> | null : null

    return ojBanner?.attributes?.banner?.data?.attributes?.url
  }

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("title"), link: "#", active: true },
  ];

  return (
    <ListNewsPage
      category={"recruitment"}
      banner={getPrefixImageUrl(banner())}
      title={t("title")}
      breadcrumbs={breadcrumbs}
      data={newsAsset?.data as Maybe<NewsEntity[]>}
      sideData={{hot_news: hotNews?.data as Maybe<NewsEntity[]>}}
      totalCount={newsAsset?.meta.pagination.total as number}
    />
  );
};

export default Recruitment;
