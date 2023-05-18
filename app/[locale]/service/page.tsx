import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";
import Banner from "@components/Banner";
import { fetchAsset } from "@api/index";
import { ILocale } from "@configs/i18n";
import BreadCrumbs from "@components/Breadcrumbs";
import ServiceOverview from "./components/Overview";
import MoreService from "@components/more-service";

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

const Service = async () => {
  const locale = useLocale();

  const [serviceAsset, t] = await Promise.all([
    fetchAsset<IServiceAsset>("service", locale as ILocale),
    getTranslations("service"),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.service"), link: "/service", active: true },
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
      <div className="container mx-auto">
        <div className="section-name mb-9 mt-12 animation">
          {t("transportation")}
        </div>
        <p
          className="text-base text-th-gray-300 font-medium text-center whitespace-pre-line animation"
          data-animation-delay="0.3s"
        >
          {serviceAsset.service_transportation_des}
        </p>
        <MoreService
          services={serviceAsset.transportation_list_service}
          more={t("more")}
        />
      </div>
    </Fragment>
  );
};
export default Service;
