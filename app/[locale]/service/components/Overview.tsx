import styles from "@app/service/style.module.scss";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC, Fragment } from "react";
import RightImg from "@assets/images/icons/arrow_right_2.svg";
import AnimatedNumber from "@components/AnimatedNumber";

interface ServiceOverviewProps {
  bgImg: string;
  txt: string;
  features: Array<{
    img: string;
    number: number;
    object: string;
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
      <div className="flex justify-between relative container mx-auto items-end">
        <div className="max-w-[540px] pb-8">
          <p className="section-name-light-left mb-10 animation">
            {t("my_service")}
          </p>
          <p
            className="text-base font-medium text-th-white mb-10 animation"
            data-animation-delay="0.3s"
          >
            {txt}
          </p>
          <button
            className="btn-white-outline animation"
            data-animation-delay="0.4s"
          >
            {t("learn_more")}
            <Image src={RightImg} width={28} height={28} alt="" />
          </button>
        </div>
        <div className="flex justify-around">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-start animation w-48">
              <Image src={feature.img} width={64} height={64} alt="" />
              <p className={styles.myServiceTitle}>
                +
                <AnimatedNumber n={feature.number} /> {feature.object}
              </p>
              <p className="text-th-white text-base font-medium mt-3 mb-9">
                {feature.txt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceOverview;
