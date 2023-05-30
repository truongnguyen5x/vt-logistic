import React, { Fragment, Suspense, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { ILocale, i18n } from "@configs/i18n";
import SliderHome from "./components/SliderHome";
import AboutUs from "./components/AboutUs";
import Image from "next/image";
import HomeTab from "./components/home-tab";
import Partner from "./components/Partner";
import ListPost from "./components/post";
import { gql } from "@generated/gql";
import { NextIntlClientProvider } from "next-intl";
import { getClient, getHomeQueryString } from "@api/graphql-client";
import {
  ComponentHomeAbout,
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
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support/ssr";
import { makeClient, makeSuspenseCache } from "@api/client";
import { getNewQueryString } from "@api/new.graghql";

// TODO: generateStaticParams what for?
// export async function generateStaticParams() {
//   return i18n.locales.map((i: ILocale) => ({ locale: i }));
// }

const getHomeAsset = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getHomeQueryString),
    variables: { locale: getLanguageForApi(locale) },
  });

  // get last element
  return data.homes?.data[data?.homes?.data?.length - 1];
};

const getNewAsset = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getNewQueryString),
    variables: {
      locale: getLanguageForApi(locale),
      filter: { is_hot: { eq: true } },
      pagination: { page: 1, pageSize: 5 },
    },
  });

  // get last element
  return data.newss?.data;
};

export default async function Home() {
  const locale = useLocale();

  const [assetData, t, message] = await Promise.all([
    getHomeAsset(locale as ILocale),
    getTranslations("home"),
    import(`../../dictionaries/${locale}.json`),
  ]);

  const listHomePost = getNewAsset(locale as ILocale);

  return (
    <Fragment>
      <SliderHome
        images={
          assetData?.attributes
            ?.banners as Maybe<UploadFileRelationResponseCollection>
        }
      />
      <SliderFeature
        contents={
          assetData?.attributes?.features as Maybe<
            Array<Maybe<ComponentHomeFeature>>
          >
        }
      />
      <section className="container mx-auto pt-12 md:pt-20">
        <p className="animation section-name mb-6">{t("about_us")}</p>
        <div className="mt-10 lg:mt-16" />
        <AboutUs
          content={
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
          contacts={
            assetData?.attributes?.contacts as Maybe<
              Array<Maybe<ComponentHomeServiceContact>>
            >
          }
        />
      </NextIntlClientProvider>

      <Partner
        title={t("partner")}
        assets={
          assetData?.attributes?.partners as Maybe<
            Array<Maybe<ComponentHomeHomePartner>>
          >
        }
      />
      <Suspense fallback={<div className="text-center">Loading...</div>}>
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
