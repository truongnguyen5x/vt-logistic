import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";
import Banner from "@components/Banner";
import { fetchAsset } from "@api/index";
import { ILocale } from "@configs/i18n";
import BreadCrumbs from "@components/Breadcrumbs";
import ServiceOverview from "./components/Overview";
import MoreService from "@components/more-service";
import "react-loading-skeleton/dist/skeleton.css";
import { getClient } from "@api/graphql-client";
import { gql } from "@generated/gql";
import { getServiceQueryString } from "@api/service.graghql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";
import {
  ComponentServiceFeature,
  ComponentServiceTransportation,
  Maybe,
  UploadFileEntityResponse,
  UploadFileRelationResponseCollection,
} from "@generated/graphql";

type IServiceAsset = {
  banner_img: string;
  my_service: string;
  overview_img: string;
  features: Array<{
    img: string;
    number: number;
    object: string;
    txt: string;
  }>;
  service_transportation_des: string;
  transportation_list_service: Array<{ txt: string; url: string; img: string }>;
};

const getServiceAsset = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getServiceQueryString),
    variables: { locale: getLanguageForApi(locale) },
  });

  // get last element
  return data.services?.data[data?.services?.data?.length - 1];
};

const Service = async () => {
  const locale = useLocale();

  const [serviceAsset, t] = await Promise.all([
    getServiceAsset(locale as ILocale),
    getTranslations("service"),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.service"), link: "/service", active: true },
  ];

  return (
    <Fragment>
      <Banner
        image={getPrefixImageUrl(
          serviceAsset?.attributes?.banner?.data?.attributes?.url
        )}
        title={t("title")}
      />
      <div className="container mx-auto">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-10" />
      </div>
      <ServiceOverview
        bgImg={getPrefixImageUrl(
          serviceAsset?.attributes?.bg_service?.data?.attributes?.url
        )}
        txt={serviceAsset?.attributes?.description || ""}
        features={
          serviceAsset?.attributes?.features as Maybe<ComponentServiceFeature[]>
        }
      />
      <div className="container mx-auto">
        <div className="section-name mb-9 mt-12 animation">
          {t("transportation")}
        </div>
        <p
          className="text-base text-th-gray-300 font-medium text-center whitespace-pre-line animation"
          data-animation-delay="0.3s"
        >
          {serviceAsset?.attributes?.description_service}
        </p>
        <MoreService
          services={
            serviceAsset?.attributes?.transportations as Maybe<
              ComponentServiceTransportation[]
            >
          }
          more={t("more")}
        />
      </div>
    </Fragment>
  );
};
export default Service;
