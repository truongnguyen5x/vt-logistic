import React, { Fragment, Suspense, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import SliderHome from "./components/SliderHome";
import AboutUs from "./components/AboutUs";
import Image from "next/image";
import HomeTab from "./components/home-tab";
import Partner from "./components/Partner";
import ListPost from "./components/post";
import { gql } from "@generated/gql";
import { NextIntlClientProvider } from "next-intl";
import { getClient, getHomeQueryString } from "@graphql/graphql-client";
import BackgroundMobileImg from "@assets/images/background/background_mobile.png";
import {
  ComponentHomeAbout,
  ComponentHomeBanner,
  ComponentHomeFeature,
  ComponentHomeHomeLookup,
  ComponentHomeHomePartner,
  ComponentHomeHomeService,
  ComponentHomeHomeTab,
  ComponentHomeServiceContact,
  Maybe,
  NewsEntity,
  UploadFileRelationResponseCollection,
} from "@generated/graphql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";
import SliderFeature from "./components/SliderFeature";
import { getNewQueryString } from "@graphql/new.graghql";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Metadata, ResolvingMetadata } from "next";
import { ILocale } from "@type/locale";

// TODO: generateStaticParams what for?

// export async function generateStaticParams() {
//   return i18n.locales.map((i: ILocale) => ({ locale: i }));
// }

type Props = {
  params: { locale: string };
};

const getHomeAsset = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getHomeQueryString),
    variables: { locale: getLanguageForApi(locale) },
  });

  // get last element
  return data.homes?.data[data?.homes?.data?.length - 1];
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;

  // fetch data
  const [assetData] = await Promise.all([getHomeAsset(locale as ILocale)]);

  return {
    title: assetData?.attributes?.SEO?.metaTitle,
    description: assetData?.attributes?.SEO?.metaDescription,
    openGraph: {
      images: [
        getPrefixImageUrl(
          assetData?.attributes?.SEO?.metaImage.data?.attributes?.url
        ),
      ],
    },
  };
}

const getListPostHome = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getNewQueryString),
    variables: {
      locale: getLanguageForApi(locale),
      filter: { is_hot: { eq: true } },
      pagination: { page: 1, pageSize: 5 },
    },
  });
  return data.newss?.data;
};

export default async function Home() {
  const locale = useLocale();

  const [assetData, t, message] = await Promise.all([
    getHomeAsset(locale as ILocale),
    getTranslations("home"),
    import(`../../dictionaries/${locale}.json`),
  ]);

  const listHomePost = getListPostHome(locale as ILocale);

  return (
    <Fragment>
      <Image
        className={styles.homeBackgroundMobile}
        src={BackgroundMobileImg}
        width={375}
        height={344}
        alt=""
      />
      <SliderHome
        banners={
          assetData?.attributes
            ?.banners as Maybe<Array<Maybe<ComponentHomeBanner>>>
        }
      />
      <SliderFeature
        features={
          assetData?.attributes?.features as Maybe<
            Array<Maybe<ComponentHomeFeature>>
          >
        }
      />
      <section className="container mx-auto pt-12 md:pt-20">
        <p className="animation section-name mb-6">{t("about_us")}</p>
        <div className="mt-10 lg:mt-16" />
        <AboutUs
          abouts={
            assetData?.attributes?.abouts as Maybe<
              Array<Maybe<ComponentHomeAbout>>
            >
          }
        />
      </section>

      <NextIntlClientProvider locale={locale} messages={message.default}>
        <HomeTab
          tabs={
            assetData?.attributes?.home_tabs as Maybe<
              Array<Maybe<ComponentHomeHomeTab>>
            >
          }
          services={
            assetData?.attributes?.services as Maybe<
              Array<Maybe<ComponentHomeHomeService>>
            >
          }
          lookups={
            assetData?.attributes?.lookups as Maybe<
              Array<Maybe<ComponentHomeHomeLookup>>
            >
          }
        />
      </NextIntlClientProvider>

      <Partner
        title={t("partner")}
        partners={
          assetData?.attributes?.partners as Maybe<
            Array<Maybe<ComponentHomeHomePartner>>
          >
        }
      />
      <Suspense
        fallback={
          <div className="container mx-auto my-10">
            <Skeleton height={300} />
          </div>
        }
      >
        <ListPost
          title={t("news_event")}
          detail={t("detail")}
          learn_more={t("learn_more")}
          promise={listHomePost as Promise<NewsEntity[]>}
        />
      </Suspense>
    </Fragment>
  );
}
