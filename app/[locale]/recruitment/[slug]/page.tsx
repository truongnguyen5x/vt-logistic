import { fetchAsset, fetchDetailPost } from "@api/index";
import Clock from "@assets/images/icons/clock.svg";
import Dislike from "@assets/images/icons/dislike.svg";
import Eye from "@assets/images/icons/eye.svg";
import Like from "@assets/images/icons/like.svg";
import Banner from "@components/Banner";
import BreadCrumbs from "@components/Breadcrumbs";
import { ILocale } from "@configs/i18n";
import { IPost } from "@type/post";
import { format } from "date-fns";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NewsSideRight from "@components/news/NewsSideRight";
import RelatedPost from "./components/RelatedPost";
import styles from "./style.module.scss";
import { Filter, Pagination } from "@app/news/components/ListNews";
import { getClient } from "@api/graphql-client";
import { gql } from "@generated/gql";
import { getNewQueryString, mutationPageView } from "@api/new.graghql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";
import { Maybe, NewsEntity, NewsInput } from "@generated/graphql";
import ReactPost from "./components/ReactPost";

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
        slug: { eq: filter.slug },
        type: { eq: filter.type },
        is_hot: { eq: filter.is_hot },
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

const PostDetail = async (props: any) => {
  const locale = useLocale();

  const [data, dataHotNews, t] = await Promise.all([
    getNewAsset(
      locale as ILocale,
      {
        slug: decodeURIComponent(props?.params?.slug),
        type: 'recruitment',
      },
      { page: 1 }
    ),
    getNewAsset(
      locale as ILocale,
      { type: 'recruitment', is_hot: true },
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

  return (
    <Fragment>
      <Banner
        image={getPrefixImageUrl(
          dataNew?.attributes?.featured_image?.data?.attributes?.url
        )}
        title={t("breadcrumbs.recruitment")}
      />
      <div className="container mx-auto mb-32">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-20" />
        <div className="flex items-start gap-[100px]">
          <div className="max-w-[940px]">
            <h5 className="text-th-gray-400 text-4xl font-semibold animation">
              {dataNew?.attributes?.title}
            </h5>
            <div className="flex items-center gap-3 mb-5 mt-2 animation">
              <Image src={Clock} alt="" width={14} height={14} />
              <div className="text-th-gray-300 text-[13px] leading-[22px]">
                {!!dataNew?.attributes?.updatedAt
                  ? format(
                      new Date(dataNew.attributes?.updatedAt),
                      "dd-MM-yyyy"
                    )
                  : ""}
              </div>
            </div>
            {!!dataNew?.attributes?.content && (
              <ReactMarkdown
                className={[
                  "text-lg text-black font-regular mb-3 list-decimal animation",
                  styles.unreset,
                ].join(" ")}
                remarkPlugins={[remarkGfm]}
              >
                {dataNew.attributes?.content}
              </ReactMarkdown>
            )}
            <div className="flex mb-2 animation">
              <div className="flex flex-1 items-center gap-3 ">
                <Image src={Eye} alt="" width={20} height={20} />
                <div className="text-th-gray-300 text-[16px] leading-[22px]">
                  {dataNew?.attributes?.page_view} {t("readed")}
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
            <RelatedPost
              post={dataNew?.attributes?.news?.data as Maybe<NewsEntity[]>}
            />
          </div>
          <NewsSideRight
            data={{ hot_news: dataHotNews?.data as Maybe<NewsEntity[]> }}
            category={"recruitment"}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default PostDetail;
