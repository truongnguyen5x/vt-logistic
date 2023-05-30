import styles from "@app/service/style.module.scss";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC, Fragment } from "react";
import RightImg from "@assets/images/icons/arrow_right_2.svg";
import AnimatedNumber from "@components/AnimatedNumber";
import { ComponentServiceFeature } from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";
import SliderFeature from "./SliderFeature";

interface ServiceOverviewProps {
  bgImg?: string;
  txt: string;
  features: Array<ComponentServiceFeature> | null;
}
const ServiceOverview: FC<ServiceOverviewProps> = ({
  txt,
  bgImg,
  features,
}) => {
  const t = useTranslations("service");

  return (
    <div className={styles.overviewWp}>
      {bgImg && <Image src={bgImg} width={1920} height={880} alt="" />}
      <div className="bg-gradient-overlay w-full h-full absolute left-0 top-0"></div>
      <div className="flex justify-between relative container max-xl:px-4 max-xl:justify-center mx-auto items-end">
        <div className="lg:max-w-[540px] pb-8">
          <p className="section-name-light-left mb-10 animation max-md:text-center max-md:after:left-1/2 max-md:after:-translate-x-1/2">
            {t("my_service")}
          </p>
          <p
            className="text-base font-medium text-th-white mb-10 animation max-md:text-center"
            data-animation-delay="0.3s"
          >
            {txt}
          </p>
          <div className="flex justify-around max-sm:hidden xl:hidden">
            {!!features &&
              !!features.length &&
              features.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-start animation">
                  {!!feature.icon && !!feature.icon.data?.attributes?.url && (
                    <Image
                      src={getPrefixImageUrl(
                        feature.icon.data?.attributes?.url
                      )}
                      width={64}
                      height={64}
                      alt=""
                    />
                  )}
                  <p className={styles.myServiceTitle}>
                    +
                    <AnimatedNumber n={feature.number} /> {feature.object}
                  </p>
                  <p className="text-th-white text-base font-medium mt-3 mb-9">
                    {feature.title}
                  </p>
                </div>
              ))}
          </div>
          <SliderFeature features={features} />
          <button
            className="btn-white-outline animation max-md:text-base max-md:px-2 max-md:w-auto max-md:flex max-md:justify-center max-md:items-center max-md:mx-auto"
            data-animation-delay="0.4s"
          >
            {t("learn_more")}
            <Image src={RightImg} width={28} height={28} alt="" />
          </button>
        </div>
        <div className="flex justify-around max-xl:hidden">
          {!!features &&
            !!features.length &&
            features.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start animation w-48"
              >
                {!!feature.icon && !!feature.icon.data?.attributes?.url && (
                  <Image
                    src={getPrefixImageUrl(feature.icon.data?.attributes?.url)}
                    width={64}
                    height={64}
                    alt=""
                  />
                )}
                <p className={styles.myServiceTitle}>
                  +
                  <AnimatedNumber n={feature.number} /> {feature.object}
                </p>
                <p className="text-th-white text-base font-medium mt-3 mb-9">
                  {feature.title}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceOverview;
