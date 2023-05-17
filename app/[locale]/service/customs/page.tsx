import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";
import Banner from "@components/Banner";
import { fetchAsset } from "@api/index";
import { ILocale } from "@configs/i18n";
import BreadCrumbs from "@components/Breadcrumbs";
import Image from "next/image";
import styles from "./style.module.scss";
import RightDarkImg from "@assets/images/icons/arrow_right_2_dark.svg";
import MoreService from "@components/more-service";

type ICustomsAsset = {
  bg_img: string;
  description: string;
};

const Customs = async () => {
  const locale = useLocale();
  const [customsAsset, t] = await Promise.all([
    fetchAsset<ICustomsAsset>("customs", locale as ILocale),
    getTranslations("customs"),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.service"), link: "/service" },
    {
      title: t("breadcrumbs.customs"),
      link: "/service/customs",
      active: true,
    },
  ];

  return (
    <Fragment>
      <Banner image={customsAsset.bg_img} title={t("title")} />
      <div className="container mx-auto">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-10" />
      </div>
    </Fragment>
  );
};

export default Customs;
