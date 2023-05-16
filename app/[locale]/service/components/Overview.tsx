import styles from "@app/service/style.module.scss";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC, Fragment } from "react";
import RightImg from "@assets/images/icons/arrow_right_2.svg";

interface ServiceOverviewProps {
  bgImg: string;
  txt: string;
  features: Array<{
    img: string;
    title: string;
    txt: string;
  }>;
}
const ServiceOverview: FC<ServiceOverviewProps> = ({
  txt,
  bgImg,
  features,
}) => {
  const t = useTranslations("service");

  return (
    <div className={styles.overviewWp}>
      <Image src={bgImg} width={1920} height={880} alt="" />
      <div className="bg-gradient-overlay w-full h-full absolute left-0 top-0"></div>
      <div className="flex justify-between relative container mx-auto">
        <div className="max-w-[540px] pb-8">
          <p className="section-name-light-left mb-10">{t("my_service")}</p>
          <p className="text-base font-medium text-th-white mb-10">{txt}</p>
          <button className="btn-white-outline">
            {t("learn_more")}
            <Image src={RightImg} width={28} height={28} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceOverview;
