import Clock from "@assets/images/icons/clock.svg";
import Eye from "@assets/images/icons/eye.svg";
import Banner from "@components/Banner";
import BreadCrumbs from "@components/Breadcrumbs";
import { ILocale } from "@configs/i18n";
import { format } from "date-fns";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NewsSideRight, { HelpCard } from "@components/news/NewsSideRight";
import RelatedPost from "./components/RelatedPost";
import styles from "./style.module.scss";
import { Filter, Pagination } from "@app/news/components/ListNews";
import { getClient } from "@api/graphql-client";
import { gql } from "@generated/gql";
import { getNewQueryString, mutationPageView } from "@api/new.graghql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";
import { Maybe, News, NewsEntity } from "@generated/graphql";
import { NewsInput } from "@generated/graphql";
import ReactPost from "./components/ReactPost";
import SliderNew from "@components/news/SliderNew";

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
        type: props?.params?.type,
      },
      { page: 1 }
    ),
    getNewAsset(
      locale as ILocale,
      { type: props?.params?.type, is_hot: true },
      { page: 1 }
    ),
    getTranslations("internal_news"),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.news"), link: "#" },
    { title: t(`breadcrumbs.${props?.params?.type}`) || "", link: "#" },
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
        title={t(`breadcrumbs.${props?.params?.type}`)}
      />
      <div className="container px-4 md:px-6 2xl:px-0 mx-auto md:mt-40 lg:mt-0 mb-10 lg:mb-32">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="my-6 xl:mb-20" />
        <div className="flex items-start lg:gap-10 2xl:gap-[100px] flex-col lg:flex-row">
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
                  post={dataNew?.attributes?.news?.data as Maybe<NewsEntity[]>}
                />
              )}
            </div>
          </div>
          <div className="max-lg:hidden">
            <NewsSideRight
              data={{ hot_news: dataHotNews?.data as Maybe<NewsEntity[]> }}
              category={props?.params?.type}
            />
          </div>
          <div className="w-full lg:hidden">
            {!!dataNew?.attributes?.news?.data.length && (
              <SliderNew
                title="Bài viết liên quan"
                data={dataNew?.attributes?.news?.data as Maybe<NewsEntity[]>}
                category={props?.params?.type}
              />
            )}
            <SliderNew
              title="Tin nổi bật"
              data={dataHotNews?.data as Maybe<NewsEntity[]>}
              category={props?.params?.type}
            />
            <HelpCard category={props?.params?.type} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PostDetail;
