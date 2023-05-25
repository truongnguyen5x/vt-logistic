import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";
import Banner from "@components/Banner";
import { fetchAsset } from "@api/index";
import { ILocale } from "@configs/i18n";
import BreadCrumbs from "@components/Breadcrumbs";
import IntroGeneral from "./components/IntroGeneral";
import Mission from "./components/Mission";
import CoreValues from "./components/CoreValues";
import Reasons from "./components/Reasons";
import MoreInfo from "./components/MoreInfo";
import { getClient } from "@api/graphql-client";
import { gql } from "@generated/gql";
import { getIntroduceQueryString } from "@api/introduce.graghql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";
import {
  ComponentCommonGroupImageContent,
  ComponentIntroduceCoreValues,
  ComponentIntroduceGeneral,
  ComponentIntroduceMission,
  ComponentIntroduceReasonsChooseWe,
  Maybe,
} from "@generated/graphql";

const getIntroduceAsset = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getIntroduceQueryString),
    variables: { locale: getLanguageForApi(locale) },
  });

  // get last element
  return data.introduces?.data[data?.introduces?.data?.length - 1];
};

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
      <div className="container mx-auto">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-10" />
        <IntroGeneral
          assets={
            introAssets?.attributes?.general as Maybe<ComponentIntroduceGeneral>
          }
          className="py-10"
        />
      </div>
      <Mission
        assets={
          introAssets?.attributes?.mission as Maybe<ComponentIntroduceMission>
        }
        className="mt-20"
      />
      <CoreValues
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
        className="mt-20"
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
