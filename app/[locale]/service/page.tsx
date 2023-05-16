import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";
import Banner from "@components/Banner";
import { fetchAsset } from "@api/index";
import { ILocale } from "@configs/i18n";
import BreadCrumbs from "@components/Breadcrumbs";
import ServiceOverview from "./components/Overview";

type IServiceAsset = {
  banner_img: string;
  my_service: string;
  overview_img: string;
  features: Array<{
    img: string;
    title: string;
    txt: string;
  }>;
};

const Service = async () => {
  const locale = useLocale();
  const t = await getTranslations("service");
  const serviceAsset: IServiceAsset = await fetchAsset(
    "service",
    locale as ILocale
  );

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.service"), link: "#" },
  ];

  return (
    <Fragment>
      <Banner image={serviceAsset.banner_img} title={t("title")} />
      <div className="container mx-auto">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-10" />
      </div>
      <ServiceOverview
        bgImg={serviceAsset.overview_img}
        txt={serviceAsset.my_service}
        features={serviceAsset.features}
      />
    </Fragment>
  );
};
export default Service;
