import Banner from "@components/Banner";
import BreadCrumbs from "@components/Breadcrumbs";
import { ILocale } from "@type/locale";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FC, useState } from "react";
import Content from "./components/Content";
import { getClient } from "@graphql/graphql-client";
import { gql } from "@generated/gql";
import { getMilestoneQueryString } from "@graphql/milestone.graghql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";
import { ComponentIntroduceMilestones, Maybe } from "@generated/graphql";
import { Metadata } from "next";

const getMilestoneAsset = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getMilestoneQueryString),
    variables: { locale: getLanguageForApi(locale) },
  });

  // get last element
  return data.milestones?.data[data?.milestones?.data?.length - 1];
};

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;

  // fetch data
  const [assetData] = await Promise.all([getMilestoneAsset(locale as ILocale)]);

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

const Milestones = async () => {
  const locale = useLocale();

  const [assets, t] = await Promise.all([
    getMilestoneAsset(locale as ILocale),
    getTranslations("milestones"),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.introduce"), link: "/introduce" },
    { title: t("title") },
  ];

  return (
    <section>
      <Banner
        image={getPrefixImageUrl(
          assets?.attributes?.banner?.data?.attributes?.url
        )}
        title={t("title")}
      />
      <div className="container px-4 mx-auto">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6" />
        <div className="relative overflow-hidden py-10">
          {!!assets?.attributes?.bg_image?.data?.attributes?.url && (
            <Image
              src={getPrefixImageUrl(
                assets?.attributes?.bg_image?.data?.attributes?.url
              )}
              alt=""
              width={1570}
              height={1035}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-md:hidden object-cover"
            />
          )}
          <Content
            assets={
              assets?.attributes?.milestones as Maybe<
                ComponentIntroduceMilestones[]
              >
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Milestones;
