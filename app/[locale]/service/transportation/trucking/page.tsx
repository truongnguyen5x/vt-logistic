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
import ResgisterPopup from "@components/register-popup";
import { getClient } from "@api/graphql-client";
import { gql } from "@generated/gql";
import { getTruckingQueryString } from "@api/trucking.graghql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";
import { ComponentTruckingOtherService, Maybe } from "@generated/graphql";

const getTruckingAsset = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getTruckingQueryString),
    variables: { locale: getLanguageForApi(locale) },
  });

  // get last element
  return data.truckings?.data[data?.truckings?.data?.length - 1];
};

const ServiceTrucking = async () => {
  const locale = useLocale();
  const [truckingAsset, t] = await Promise.all([
    getTruckingAsset(locale as ILocale),
    getTranslations("trucking"),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.service"), link: "/service" },
    {
      title: t("breadcrumbs.trucking"),
      link: "/service/trucking",
      active: true,
    },
  ];

  return (
    <Fragment>
      <Banner
        image={getPrefixImageUrl(
          truckingAsset?.attributes?.banner?.data?.attributes?.url
        )}
        title={t("title")}
      />
      <div className="container mx-auto">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-10" />
        <h3 className="section-name mb-10 animation">{t("title")}</h3>
        <p
          className="text-th-gray-300 font-medium text-base whitespace-pre-line text-center animation"
          data-animation-delay="0.3s"
        >
          {truckingAsset?.attributes?.description}
        </p>
        <div className="flex gap-24 mt-14 mb-28">
          <div>
            <div className="relative animation" data-animation-delay="0.4s">
              <Image
                src={getPrefixImageUrl(
                  truckingAsset?.attributes?.intro_img?.data?.attributes?.url
                )}
                alt=""
                width={700}
                height={480}
                className="rounded-lg"
              />
              <Image
                src={getPrefixImageUrl(
                  truckingAsset?.attributes?.sub_intro_img?.data?.attributes
                    ?.url
                )}
                alt=""
                width={310}
                height={300}
                className="rounded-lg absolute -bottom-8 -right-8 shadow-[-31px_-31px_#fff]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {!!truckingAsset?.attributes?.intro_features?.length &&
              truckingAsset?.attributes?.intro_features.map((intro, idx) => (
                <div
                  key={idx}
                  className="flex animation gap-3 items-start"
                  data-animation-delay={`${0.3 + 0.1 * idx}s`}
                >
                  <Image
                    src={getPrefixImageUrl(intro?.icon?.data?.attributes?.url)}
                    width={64}
                    height={64}
                    alt=""
                  />
                  <div>
                    <p className={styles.introItem}>{intro?.title}</p>
                    <p className="text-base text-th-gray-300 font-medium">
                      {intro?.description}
                    </p>
                  </div>
                </div>
              ))}
            <div className="mt-6">
              <ResgisterPopup
                textBtn={t("create_order")}
                title={t("register_popup.title")}
                description={t("register_popup.description")}
                label={{
                  fullname: t("register_popup.fullname"),
                  phone_number: t("register_popup.phone_number"),
                  email: t("register_popup.email"),
                  service: t("register_popup.service"),
                  from: t("register_popup.from"),
                  to: t("register_popup.to"),
                  weight: t("register_popup.weight"),
                  note: t("register_popup.note"),
                  button: t("register_popup.button"),
                  required: t("register_popup.required"),
                }}
                placeholder={{
                  fullname: t("register_popup.placeholder.fullname"),
                  phone_number: t("register_popup.placeholder.phone_number"),
                  email: t("register_popup.placeholder.email"),
                  from: t("register_popup.placeholder.from"),
                  to: t("register_popup.placeholder.to"),
                  weight: t("register_popup.placeholder.weight"),
                  note: t("register_popup.placeholder.note"),
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-th-gray-250 py-28">
        <div className="container mx-auto flex">
          <div className="min-w-0">
            <h3 className="section-name-left mb-11 animation">
              {t("domestic_shipping")}
            </h3>
            {!!truckingAsset?.attributes?.internal_features?.length &&
              truckingAsset?.attributes?.internal_features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 my-6 animation"
                  data-animtion-delay={`${0.3 + 0.1 * idx}s`}
                >
                  <Image
                    className="mt-2"
                    src={RightDarkImg}
                    width={24}
                    height={24}
                    alt=""
                  />
                  <div className="mr-10">
                    <p className={styles.domesticItem}>{item?.title}</p>
                    <p className="text-base text-th-gray-300 font-medium">
                      {item?.description}
                    </p>
                  </div>
                </div>
              ))}
            <div className="flex gap-6 mt-9">
              <ResgisterPopup
                textBtn={t("create_order")}
                title={t("register_popup.title")}
                description={t("register_popup.description")}
                label={{
                  fullname: t("register_popup.fullname"),
                  phone_number: t("register_popup.phone_number"),
                  email: t("register_popup.email"),
                  service: t("register_popup.service"),
                  from: t("register_popup.from"),
                  to: t("register_popup.to"),
                  weight: t("register_popup.weight"),
                  note: t("register_popup.note"),
                  button: t("register_popup.button"),
                  required: t("register_popup.required"),
                }}
                placeholder={{
                  fullname: t("register_popup.placeholder.fullname"),
                  phone_number: t("register_popup.placeholder.phone_number"),
                  email: t("register_popup.placeholder.email"),
                  from: t("register_popup.placeholder.from"),
                  to: t("register_popup.placeholder.to"),
                  weight: t("register_popup.placeholder.weight"),
                  note: t("register_popup.placeholder.note"),
                }}
              />
              <button
                className="btn-gray-outlined animation"
                data-animtion-delay="0.6s"
              >
                {t("pricing")}
              </button>
            </div>
          </div>
          <div className="self-center">
            <Image
              src={getPrefixImageUrl(
                truckingAsset?.attributes?.internal_img?.data?.attributes?.url
              )}
              width={735}
              height={400}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex py-28 gap-16">
        <div className="self-center">
          <Image
            src={getPrefixImageUrl(
              truckingAsset?.attributes?.international_img?.data?.attributes
                ?.url
            )}
            width={735}
            height={400}
            alt=""
          />
        </div>
        <div className="min-w-0">
          <h3 className="section-name-left mb-11 animation">
            {t("international_shipping")}
          </h3>
          {!!truckingAsset?.attributes?.international_features?.length &&
            truckingAsset?.attributes?.international_features.map(
              (item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 my-6 animation"
                  data-animtion-delay={`${0.3 + 0.1 * idx}s`}
                >
                  <Image
                    className="mt-2"
                    src={RightDarkImg}
                    width={24}
                    height={24}
                    alt=""
                  />
                  <div>
                    <p className={styles.domesticItem}>{item?.title}</p>
                    <p className="text-base text-th-gray-300 font-medium">
                      {item?.description}
                    </p>
                  </div>
                </div>
              )
            )}
          <div className="flex gap-6 mt-9">
            <ResgisterPopup
              textBtn={t("create_order")}
              title={t("register_popup.title")}
              description={t("register_popup.description")}
              label={{
                fullname: t("register_popup.fullname"),
                phone_number: t("register_popup.phone_number"),
                email: t("register_popup.email"),
                service: t("register_popup.service"),
                from: t("register_popup.from"),
                to: t("register_popup.to"),
                weight: t("register_popup.weight"),
                note: t("register_popup.note"),
                button: t("register_popup.button"),
                required: t("register_popup.required"),
              }}
              placeholder={{
                fullname: t("register_popup.placeholder.fullname"),
                phone_number: t("register_popup.placeholder.phone_number"),
                email: t("register_popup.placeholder.email"),
                from: t("register_popup.placeholder.from"),
                to: t("register_popup.placeholder.to"),
                weight: t("register_popup.placeholder.weight"),
                note: t("register_popup.placeholder.note"),
              }}
            />
            <button
              className="btn-gray-outlined animation"
              data-animtion-delay="0.6s"
            >
              {t("pricing")}
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h3 className="section-name mb-14 animation">
          {t("maybe_you_are_interested")}
        </h3>
        <MoreService
          more={t("more")}
          services={
            truckingAsset?.attributes?.other as Maybe<
              ComponentTruckingOtherService[]
            >
          }
        />
      </div>
    </Fragment>
  );
};

export default ServiceTrucking;
