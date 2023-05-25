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
import HexagonImg from "@assets/images/hexagon.svg";
import ButtonRegister from "@components/btn-register";
import { getClient } from "@api/graphql-client";
import { gql } from "@generated/gql";
import { getCustomQueryString } from "@api/custom.graghql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";

const getCustomAsset = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getCustomQueryString),
    variables: { locale: getLanguageForApi(locale) },
  });

  // get last element
  return data.customs?.data[data?.customs?.data?.length - 1];
};

const Customs = async () => {
  const locale = useLocale();
  const [customsAsset, t] = await Promise.all([
    getCustomAsset(locale as ILocale),
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
      <Banner
        image={getPrefixImageUrl(
          customsAsset?.attributes?.banner?.data?.attributes?.url
        )}
        title={t("short_name")}
      />
      <div className="container mx-auto">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-10" />
        <div className="flex gap-24 mt-14 mb-28">
          <div className="basis-1/2">
            <div className="relative animation" data-animation-delay="0.4s">
              <Image
                src={getPrefixImageUrl(
                  customsAsset?.attributes?.infomation?.info_img?.data
                    ?.attributes?.url
                )}
                alt=""
                width={700}
                height={480}
                className="rounded-lg"
              />
              <Image
                src={getPrefixImageUrl(
                  customsAsset?.attributes?.infomation?.info_sub_img?.data
                    ?.attributes?.url
                )}
                alt=""
                width={310}
                height={300}
                className="rounded-lg absolute -bottom-8 -right-8 shadow-[-31px_-31px_#fff]"
              />
            </div>
          </div>
          <div className="basis-1/2">
            <h3 className="section-name-left mb-10 animation mt-12">
              {t("title")}
            </h3>
            <p
              className="text-th-gray-300 font-medium text-base whitespace-pre-line animation mb-8"
              data-animation-delay="0.3s"
            >
              {customsAsset?.attributes?.infomation?.description}
            </p>
            {!!customsAsset?.attributes?.infomation?.advantage?.length &&
              customsAsset?.attributes?.infomation?.advantage.map(
                (txt, idx) => (
                  <p
                    key={idx}
                    className="text-th-gray-500 font-medium text-base my-2 animation"
                    data-animtion-delay={`${0.3 + 0.1 * idx}s`}
                  >
                    <Image
                      className="inline mr-3 mb-[2px]"
                      src={RightDarkImg}
                      width={24}
                      height={24}
                      alt=""
                    />
                    {txt?.title}
                  </p>
                )
              )}
          </div>
        </div>
      </div>
      <div className="bg-th-gray-250 py-28">
        <div className="container mx-auto">
          <h3 className="section-name mb-10 animation">{t("procedure")}</h3>
          <div className="grid grid-cols-3 gap-24 mt-20">
            {!!customsAsset?.attributes?.procedures?.length &&
              customsAsset?.attributes?.procedures.map((item, idx) => (
                <div
                  key={idx}
                  data-animtion-delay={`${0.3 + 0.1 * idx}s`}
                  className={[styles.procedureWp, "animation"].join(" ")}
                >
                  <Image
                    className="absolute left-0 top-0 bottom-0 right-0"
                    src={HexagonImg}
                    width={443}
                    height={260}
                    alt="hexagon"
                  />
                  <div className="absolute left-0 top-0 bottom-0 right-0 flex flex-col p-12 gap-10">
                    <div className={styles.gradientBox} />
                    <p className={styles.procedureTxt}>{item?.text}</p>
                  </div>
                  <div
                    className={
                      item?.is_active ? styles.indexActive : styles.index
                    }
                  >
                    {idx + 1}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h3 className="section-name mb-20 mt-14 animation">{t("pricing")}</h3>
        <div className={[styles.learnMore, "animation"].join(" ")}>
          <Image
            className="w-full h-full object-cover absolute right-0 left-0 top-0 bottom-0"
            src={getPrefixImageUrl(
              customsAsset?.attributes?.bg_price?.data?.attributes?.url
            )}
            width={1530}
            height={480}
            alt="office"
          />
          <div className="bg-gradient-overlay absolute right-0 left-0 top-0 bottom-0"></div>
          <p className="animation z-10 text-th-white font-medium text-base">
            {t("policy")}
          </p>
          <ButtonRegister text={t("register_now")} />
        </div>
      </div>
    </Fragment>
  );
};

export default Customs;
