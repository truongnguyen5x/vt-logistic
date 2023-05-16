import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";
import Banner from "@components/Banner";
import { fetchAsset } from "@api/index";
import { ILocale } from "@configs/i18n";
import BreadCrumbs from "@components/Breadcrumbs";

type IServiceAsset = {
  banner_img: string;
};

const Service = async () => {
  const locale = useLocale();
  const t = await getTranslations("service");
  const data: IServiceAsset = await fetchAsset("service", locale as ILocale);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.service"), link: "#" },
  ];

  return (
    <Fragment>
      <Banner image={data.banner_img} title={t("title")} />
      <div className="container mx-auto">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-10" />
      </div>
    </Fragment>
  );
};
export default Service;
