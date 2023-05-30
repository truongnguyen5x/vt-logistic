import Banner from "@components/Banner";
import BreadCrumbs from "@components/Breadcrumbs";
import { ILocale } from "@configs/i18n";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FC, useState } from "react";
import Content from "./components/Content";
import { getClient } from "@api/graphql-client";
import { gql } from "@generated/gql";
import { getMilestoneQueryString } from "@api/milestone.graghql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";
import { ComponentIntroduceMilestones, Maybe } from "@generated/graphql";

const getMilestoneAsset = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getMilestoneQueryString),
    variables: { locale: getLanguageForApi(locale) },
  });

  // get last element
  return data.milestones?.data[data?.milestones?.data?.length - 1];
};

const Milestones = async () => {
  const locale = useLocale();

  const [assets, t] = await Promise.all([
    getMilestoneAsset(locale as ILocale),
    getTranslations("milestones"),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.introduce"), link: "#" },
    { title: t("breadcrumbs.general_intro"), link: "/introduce" },
    { title: t("title"), link: "#", active: true },
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
        <div className="relative">
          {!!assets?.attributes?.bg_image?.data?.attributes?.url && (
            <Image
              src={getPrefixImageUrl(
                assets?.attributes?.bg_image?.data?.attributes?.url
              )}
              alt=""
              width={1570}
              height={1035}
              className="max-md:hidden h-[1000px] object-contain"
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
