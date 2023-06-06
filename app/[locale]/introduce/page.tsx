import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";
import Banner from "@components/Banner";
import { ILocale } from "@type/locale";
import BreadCrumbs from "@components/Breadcrumbs";
import IntroGeneral from "./components/IntroGeneral";
import Mission from "./components/Mission";
import CoreValues from "./components/CoreValues";
import Reasons from "./components/Reasons";
import MoreInfo from "./components/MoreInfo";
import { getClient } from "@graphql/graphql-client";
import { gql } from "@generated/gql";
import { getIntroduceQueryString } from "@graphql/introduce.graghql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";
import {
  ComponentCommonGroupImageContent,
  ComponentIntroduceCoreValues,
  ComponentIntroduceGeneral,
  ComponentIntroduceMission,
  ComponentIntroduceReasonsChooseWe,
  Maybe,
} from "@generated/graphql";
import { Metadata } from "next";

const getIntroduceAsset = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getIntroduceQueryString),
    variables: { locale: getLanguageForApi(locale) },
  });

  // get last element
  return data.introduces?.data[data?.introduces?.data?.length - 1];
};

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;

  // fetch data
  const [assetData] = await Promise.all([getIntroduceAsset(locale as ILocale)]);

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

const Introduce = async () => {
  const locale = useLocale();

  const [introAssets, t] = await Promise.all([
    getIntroduceAsset(locale as ILocale),
    getTranslations("introduce"),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.introduce"), link: "#" },
    { title: t("common"), link: "#", active: true },
  ];

  return (
    <Fragment>
      <Banner
        image={getPrefixImageUrl(
          introAssets?.attributes?.banner?.data?.attributes?.url
        )}
        title={t("common")}
      />
      <div className="container px-4 md:mx-auto">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-10" />
        <IntroGeneral
          assets={
            introAssets?.attributes?.general as Maybe<ComponentIntroduceGeneral>
          }
          className="xl:py-10"
        />
      </div>
      <Mission
        title={t("mission")}
        assets={
          introAssets?.attributes?.mission as Maybe<ComponentIntroduceMission>
        }
        className="mt-14 md:mt-20"
      />
      <CoreValues
        title={t("core_values")}
        assets={
          introAssets?.attributes
            ?.core_values as Maybe<ComponentIntroduceCoreValues>
        }
      />
      <Reasons
        assets={
          introAssets?.attributes
            ?.reasons_choose_we as Maybe<ComponentIntroduceReasonsChooseWe>
        }
        className="mt-16 md:mt-20"
      />
      <MoreInfo
        assets={
          introAssets?.attributes?.other as Maybe<
            ComponentCommonGroupImageContent[]
          >
        }
        className="mt-20 pb-20"
      />
    </Fragment>
  );
};

export default Introduce;
