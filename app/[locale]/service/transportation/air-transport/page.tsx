import { NextIntlClientProvider, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";
import Banner from "@components/Banner";
import { ILocale } from "@type/locale";
import BreadCrumbs from "@components/Breadcrumbs";
import Image from "next/image";
import styles from "./style.module.scss";
import RightDarkImg from "@assets/images/icons/arrow_right_2_dark.svg";
import MoreService from "@components/more-service";
import ResgisterPopup from "@components/register-popup";
import { getClient } from "@graphql/graphql-client";
import { gql } from "@generated/gql";
import { getTruckingQueryString } from "@graphql/trucking.graghql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";
import {
  ComponentAirFeature,
  ComponentServiceFeature,
  ComponentTruckingOtherService,
  Maybe,
} from "@generated/graphql";

import { Metadata } from "next";
import PricePopup from "@components/price-popup";
import clsx from "clsx";

import SliderAirTransport from "./components/Slider";
import { getAirTransportQueryString } from "@graphql/air_transport.graphql";

const getAirAsset = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getAirTransportQueryString),
    variables: { locale: getLanguageForApi(locale) },
  });

  // get last element
  return data.airTransports?.data[data?.airTransports?.data?.length - 1];
};

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;

  // fetch data
  const [assetData] = await Promise.all([getAirAsset(locale as ILocale)]);

  return {
    title: assetData?.attributes?.SEO?.metaTitle,
    description: assetData?.attributes?.SEO?.metaDescription,
    openGraph: {
      images: [
        getPrefixImageUrl(
          assetData?.attributes?.SEO?.metaImage.data?.attributes?.url
        ),
      ],
    },
  };
}

const ServiceAirTransport = async () => {
  const locale = useLocale();
  const [airAsset, t, message] = await Promise.all([
    getAirAsset(locale as ILocale),
    getTranslations("air"),
    import(`../../../../../dictionaries/${locale}.json`),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.service"), link: "/service" },
    {
      title: t("breadcrumbs.air"),
      link: "/service/transportation/air-transport",
      active: true,
    },
  ];

  return (
    <Fragment>
      <Banner
        image={getPrefixImageUrl(
          airAsset?.attributes?.banner?.data?.attributes?.url
        )}
        title={t("title")}
      />
      <div className="container max-md:px-4 max-xl:px-6 mx-auto">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-10" />
        <h3 className="section-name mb-10 animation">{t("title")}</h3>
        <p
          className="text-th-gray-300 font-medium text-lg whitespace-pre-line text-center animation"
          data-animation-delay="0.3s"
        >
          {airAsset?.attributes?.description}
        </p>
        <SliderAirTransport
          features={
            airAsset?.attributes?.features as Maybe<
              Array<Maybe<ComponentAirFeature>>
            >
          }
        />
      </div>
      <div className="bg-th-gray-250 py-10 lg:py-28">
        <div className="container max-md:px-4 max-xl:px-6 mx-auto flex">
          <div className="min-w-0 max-lg:flex-grow lg:basis-1/2">
            <h3
              className={clsx(
                "section-name-left mb-11 animation max-lg:text-center",
                "max-lg:after:left-1/2 max-lg:after:-translate-x-1/2"
              )}
            >
              {t("domestic")}
            </h3>
            <div className="self-center lg:hidden animation">
              <Image
                src={getPrefixImageUrl(
                  airAsset?.attributes?.domestic_image?.data?.attributes?.url
                )}
                width={735}
                height={400}
                alt=""
              />
            </div>
            {!!airAsset?.attributes?.domestic_services?.length &&
              airAsset?.attributes?.domestic_services.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 my-6 animation"
                  data-animtion-delay={`${0.3 + 0.1 * idx}s`}
                >
                  <Image
                    className="mt-2"
                    src={RightDarkImg}
                    width={20}
                    height={20}
                    alt=""
                  />
                  <div className="mr-10">
                    <p className={styles.domesticItem}>{item?.title}</p>
                  </div>
                </div>
              ))}
            <div className="flex max-md:flex-col-reverse gap-6 mt-9">
              <NextIntlClientProvider
                locale={locale}
                messages={message.default}
              >
                <ResgisterPopup
                  type="air_transport_domestic"
                  locale={locale as ILocale}
                />
              </NextIntlClientProvider>
              <PricePopup
                buttonTxt={t("pricing")}
                title={airAsset?.attributes?.domestic_price?.title || ""}
                priceImage={
                  airAsset?.attributes?.domestic_price?.price_image?.data
                    ?.attributes?.url || ""
                }
              />
            </div>
          </div>
          <div className="self-center max-lg:hidden basis-1/2 xl:h-[450px] animation">
            <Image
              src={getPrefixImageUrl(
                airAsset?.attributes?.domestic_image?.data?.attributes?.url
              )}
              width={735}
              height={400}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="container max-md:px-4 max-xl:px-6 mx-auto flex py-10 lg:py-28 gap-16">
        <div className="self-center max-lg:hidden basis-1/2 xl:h-[450px] animation">
          <Image
            src={getPrefixImageUrl(
              airAsset?.attributes?.international_image?.data?.attributes?.url
            )}
            width={735}
            height={400}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0 max-lg:flex-grow lg:basis-1/2">
          <h3 className="section-name-left mb-11 animation max-lg:text-center max-lg:after:left-1/2 max-lg:after:-translate-x-1/2">
            {t("international")}
          </h3>
          <div className="self-center lg:hidden animation">
            <Image
              src={getPrefixImageUrl(
                airAsset?.attributes?.international_image?.data?.attributes?.url
              )}
              width={735}
              height={400}
              alt=""
            />
          </div>
          {!!airAsset?.attributes?.international_services?.length &&
            airAsset?.attributes?.international_services.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 my-6 animation"
                data-animtion-delay={`${0.3 + 0.1 * idx}s`}
              >
                <Image
                  className="mt-2"
                  src={RightDarkImg}
                  width={20}
                  height={20}
                  alt=""
                />
                <div>
                  <p className={styles.domesticItem}>{item?.title}</p>
                </div>
              </div>
            ))}
          <div className="flex max-md:flex-col-reverse gap-6 mt-9">
            <NextIntlClientProvider locale={locale} messages={message.default}>
              <ResgisterPopup
                type="air_transport_international"
                locale={locale as ILocale}
              />
            </NextIntlClientProvider>
            <PricePopup
              buttonTxt={t("pricing")}
              title={
                airAsset?.attributes?.international_price_table?.title || ""
              }
              priceImage={
                airAsset?.attributes?.international_price_table?.price_image
                  ?.data?.attributes?.url || ""
              }
            />
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
            airAsset?.attributes?.others as Maybe<
              ComponentTruckingOtherService[]
            >
          }
        />
      </div>
    </Fragment>
  );
};

export default ServiceAirTransport;
