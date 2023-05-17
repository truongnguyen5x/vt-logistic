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
  intro_img: string;
  intro_sub_img: string;
  features: string[];
  procedures: Array<{ is_active: boolean; txt: string }>;
  price_img: string;
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
      <Banner image={customsAsset.bg_img} title={t("short_name")} />
      <div className="container mx-auto">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-10" />
        <div className="flex gap-24 mt-14 mb-28">
          <div>
            <div className="relative animation" data-animation-delay="0.4s">
              <Image
                src={customsAsset.intro_img}
                alt=""
                width={700}
                height={480}
                className="rounded-lg"
              />
              <Image
                src={customsAsset.intro_sub_img}
                alt=""
                width={310}
                height={300}
                className="rounded-lg absolute -bottom-8 -right-8 shadow-[-31px_-31px_#fff]"
              />
            </div>
          </div>
          <div>
            <h3 className="section-name-left mb-10 animation mt-12">
              {t("title")}
            </h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Customs;
