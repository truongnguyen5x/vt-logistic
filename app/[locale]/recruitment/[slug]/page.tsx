import { Fragment } from "react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Clock from "@assets/images/icons/clock.svg";
import Eye from "@assets/images/icons/eye.svg";
import Banner from "@components/Banner";
import BreadCrumbs from "@components/Breadcrumbs";
import { ILocale } from "@type/locale";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import NewsSideRight, { HelpCard } from "@components/news/NewsSideRight";
import RelatedPost from "./components/RelatedPost";
import styles from "./style.module.scss";
import { Filter, Pagination } from "@app/news/components/ListNews";
import { getClient } from "@graphql/graphql-client";
import { gql } from "@generated/gql";
import {
  getDetailNewsQueryString,
  getNewQueryString,
  mutationPageView,
} from "@graphql/new.graghql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";
import {
  Enum_News_Type,
  Maybe,
  NewsEntity,
  NewsInput,
} from "@generated/graphql";
import ReactPost from "./components/ReactPost";
import SliderNew from "@components/news/SliderNew";
import { Metadata } from "next";
import { formatDate2 } from "@ultility/date_time";
import NoResult from "@components/NoResult";

const getNewAsset = async (
  locale: ILocale,
  filter: Filter,
  pagination: Pagination
) => {
  const { data } = await getClient().query({
    query: gql(getDetailNewsQueryString),
    variables: {
      locale: getLanguageForApi(locale),
      filter: {
        slug: { eq: filter.slug },
        type: { eq: filter.type },
      },
      pagination: { page: pagination.page, pageSize: 3 },
    },
  });

  // get last element
  return data.newss;
};

const updateNew = async (locale: ILocale, id: string, data: NewsInput) => {
  const mutation = await getClient().mutate({
    mutation: gql(mutationPageView),
    variables: { id: id, data: data, locale: locale },
  });

  return mutation;
};

type Props = {
  params: { locale: string; slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;

  // fetch data
  const [assetData] = await Promise.all([
    getNewAsset(
      locale as ILocale,
      {
        slug: decodeURIComponent(params?.slug),
        type: "recruitment",
      },
      { page: 1 }
    ),
  ]);

  return {
    title: assetData?.data[0]?.attributes?.SEO?.metaTitle,
    description: assetData?.data[0]?.attributes?.SEO?.metaDescription,
    openGraph: {
      images: [
        getPrefixImageUrl(
          assetData?.data[0]?.attributes?.SEO?.metaImage.data?.attributes?.url
        ),
      ],
    },
  };
}

const RecruitmentDetail = async (props: any) => {
  const locale = useLocale();

  const [data, dataHotNews, t] = await Promise.all([
    getNewAsset(
      locale as ILocale,
      {
        slug: decodeURIComponent(props?.params?.slug),
        type: "recruitment",
      },
      { page: 1 }
    ),
    getNewAsset(
      locale as ILocale,
      { type: "recruitment", is_hot: true },
      { page: 1 }
    ),
    getTranslations("internal_news"),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.news"), link: "#" },
    { title: t("breadcrumbs.recruitment"), link: "/recruitment" },
    {
      title: decodeURIComponent(props?.params?.slug) || "",
      link: "#",
      active: true,
    },
  ];

  const dataNew = data?.data[0];

  if (!!dataNew?.id) {
    updateNew(locale as ILocale, dataNew.id, {
      page_view: dataNew.attributes?.page_view + 1,
    });
  }

  const renderContent = () => {
    if (!dataNew) {
      return (
        <div className="max-w-[100%] min-w-[1px] lg:max-w-[940px] basis-2/3 overflow-x-hidden">
          <NoResult txt={t("no_data")} />
        </div>
      );
    }
    return (
      <div className="max-w-[100%] min-w-[1px] lg:max-w-[940px] basis-2/3 overflow-x-hidden">
        <h5 className="text-th-gray-400 text-4xl font-semibold animation">
          {dataNew?.attributes?.title}
        </h5>
        <div className="flex items-center gap-3 mb-5 mt-2 animation">
          <Image src={Clock} alt="" width={14} height={14} />
          <div className="text-th-gray-300 text-[13px] leading-[22px]">
            {!!dataNew?.attributes?.updatedAt
              ? formatDate2(new Date(dataNew.attributes?.updatedAt))
              : ""}
          </div>
        </div>
        <div
          className={styles.unreset}
          dangerouslySetInnerHTML={{
            __html: dataNew?.attributes?.contents || "",
          }}
        />
        <div className="flex justify-between mb-2 animation">
          <div className="flex lg:flex-1 items-center gap-3 ">
            <Image src={Eye} alt="" width={20} height={20} />
            <div className="text-th-gray-300 text-[16px] leading-[22px]">
              {dataNew?.attributes?.page_view}{" "}
              <span className="max-lg:hidden">{t("readed")}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ReactPost
              dataNew={dataNew as NewsEntity}
              locale={locale as ILocale}
            />
            <div className="text-th-gray-300 text-[16px] leading-[22px]">
              {t("post_useful")}
            </div>
          </div>
        </div>
        <div className="max-lg:hidden">
          {!!dataNew?.attributes?.news?.data.length && (
            <RelatedPost
              title={t("related_post")}
              post={dataNew?.attributes?.news?.data as Maybe<NewsEntity[]>}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <Banner
        image={getPrefixImageUrl(
          dataNew?.attributes?.featured_image?.data?.attributes?.url
        )}
        title={t("breadcrumbs.recruitment")}
      />
      <div className="container px-4 md:px-6 2xl:px-0 mx-auto lg:mt-0 mb-10 lg:mb-32">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="my-6 xl:mb-20" />
        <div className="flex items-start lg:gap-10 2xl:gap-[100px] flex-col lg:flex-row">
          {renderContent()}
          <div className="max-lg:hidden basis-1/3">
            <NewsSideRight
              data={{ hot_news: dataHotNews?.data as Maybe<NewsEntity[]> }}
              category={Enum_News_Type.Recruitment}
            />
          </div>
          <div className="w-full lg:hidden">
            {!!dataNew?.attributes?.news?.data.length && (
              <SliderNew
                title="Bài viết liên quan"
                data={dataNew?.attributes?.news?.data as Maybe<NewsEntity[]>}
                category={Enum_News_Type.Recruitment}
              />
            )}
            <SliderNew
              title="Tin nổi bật"
              data={dataHotNews?.data as Maybe<NewsEntity[]>}
              category={Enum_News_Type.Recruitment}
            />
            <HelpCard category={Enum_News_Type.Recruitment} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RecruitmentDetail;
