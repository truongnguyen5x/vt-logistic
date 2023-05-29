import React, { Fragment, Suspense, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { fetchAsset, fetchHomePost } from "@api/index";
import { ILocale, i18n } from "@configs/i18n";
import SliderHome from "./components/Slider";
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
  ComponentHomeHomeLookup,
  ComponentHomeHomePartner,
  ComponentHomeHomeService,
  ComponentHomeHomeTab,
  ComponentHomeServiceContact,
  Maybe,
  UploadFileRelationResponseCollection,
} from "@generated/graphql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";

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

export default async function Home() {
  const locale = useLocale();

  const [assetData, t, message] = await Promise.all([
    getHomeAsset(locale as ILocale),
    getTranslations("home"),
    import(`../../dictionaries/${locale}.json`),
  ]);

  const listHomePost = fetchHomePost(locale as ILocale);

  return (
    <Fragment>
      <SliderHome
        images={
          assetData?.attributes
            ?.banners as Maybe<UploadFileRelationResponseCollection>
        }
      />
      <section className={[styles.feature].join(" ")}>
        <div className="container mx-auto flex  items-center justify-between my-4">
          {assetData?.attributes?.features?.map((i, index: number) => (
            <div
              key={index}
              className={[styles.featureItem, "animation"].join(" ")}
            >
              <Image
                src={getPrefixImageUrl(i?.icon?.data?.attributes?.url)}
                alt=""
                width={50}
                height={50}
              />
              <p>{i?.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container mx-auto pt-20">
        <p className="animation section-name mb-6">{t("about_us")}</p>
        <div className="mt-16" />
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
      <Suspense fallback={<div>Loading...</div>}>
        <ListPost
          title={t("news_event")}
          detail={t("detail")}
          learn_more={t("learn_more")}
          promise={listHomePost}
        />
      </Suspense>
    </Fragment>
  );
}
