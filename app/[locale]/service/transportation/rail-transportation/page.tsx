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
  ComponentServiceFeature,
  ComponentTruckingOtherService,
  Maybe,
} from "@generated/graphql";
import { ApolloWrapper } from "@graphql/client";
import { Metadata } from "next";
import PricePopup from "@components/price-popup";
import clsx from "clsx";
import { getRailQueryString } from "@graphql/rail.graphql";
import SliderRail from "./components/Slider";

const getRailAsset = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getRailQueryString),
    variables: { locale: getLanguageForApi(locale) },
  });

  // get last element
  return data.railTransportations?.data[
    data?.railTransportations?.data?.length - 1
  ];
};

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;

  // fetch data
  const [assetData] = await Promise.all([getRailAsset(locale as ILocale)]);

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

const ServiceRailTransport = async () => {
  const locale = useLocale();
  const [railAsset, t, message] = await Promise.all([
    getRailAsset(locale as ILocale),
    getTranslations("rail"),
    import(`../../../../../dictionaries/${locale}.json`),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.service"), link: "/service" },
    {
      title: t("breadcrumbs.rail"),
      link: "/service/transportation/rail-transportation",
      active: true,
    },
  ];

  return (
    <Fragment>
      <Banner
        image={getPrefixImageUrl(
          railAsset?.attributes?.banner?.data?.attributes?.url
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
          {railAsset?.attributes?.description}
        </p>
        <SliderRail
          features={
            railAsset?.attributes?.features as Maybe<
              Array<Maybe<ComponentServiceFeature>>
            >
          }
        />
        <div className="mt-10 mb-20 text-center">
          <NextIntlClientProvider locale={locale} messages={message.default}>
            <ResgisterPopup type="rail_transport" locale={locale as ILocale} />
          </NextIntlClientProvider>
        </div>
      </div>
      <div className="bg-th-gray-250 py-10 lg:py-28">
        <div className="container max-md:px-4 max-xl:px-6 mx-auto flex">
          <div className="min-w-0 max-xl:flex-grow xl:basis-1/2">
            <h3
              className={clsx(
                "section-name-left mb-11 animation max-lg:text-center",
                "max-lg:after:left-1/2 max-lg:after:-translate-x-1/2"
              )}
            >
              {t("service")}
            </h3>
            <div className="self-center lg:hidden">
              <Image
                src={getPrefixImageUrl(
                  railAsset?.attributes?.service_image?.data?.attributes?.url
                )}
                width={735}
                height={400}
                alt=""
              />
            </div>
            {!!railAsset?.attributes?.services?.length &&
              railAsset?.attributes?.services.map((item, idx) => (
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
                  type="rail_transport"
                  locale={locale as ILocale}
                />
              </NextIntlClientProvider>
              <PricePopup
                buttonTxt={t("pricing")}
                title={railAsset?.attributes?.price_table?.title || ""}
                priceImage={
                  railAsset?.attributes?.price_table?.price_image?.data
                    ?.attributes?.url || ""
                }
              />
            </div>
          </div>
          <div className="self-center max-lg:hidden basis-1/2 xl:h-[450px]">
            <Image
              src={getPrefixImageUrl(
                railAsset?.attributes?.service_image?.data?.attributes?.url
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
        <div className="self-center max-lg:hidden basis-1/2 xl:h-[450px]">
          <Image
            src={getPrefixImageUrl(
              railAsset?.attributes?.advantag_image?.data?.attributes?.url
            )}
            width={735}
            height={400}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0 max-xl:flex-grow xl:basis-1/2">
          <h3 className="section-name-left mb-11 animation max-lg:text-center max-lg:after:left-1/2 max-lg:after:-translate-x-1/2">
            {t("advantage")}
          </h3>
          <div className="self-center lg:hidden">
            <Image
              src={getPrefixImageUrl(
                railAsset?.attributes?.advantag_image?.data?.attributes?.url
              )}
              width={735}
              height={400}
              alt=""
            />
          </div>
          {!!railAsset?.attributes?.advantages?.length &&
            railAsset?.attributes?.advantages.map((item, idx) => (
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
                type="rail_transport"
                locale={locale as ILocale}
              />
            </NextIntlClientProvider>
            <PricePopup
              buttonTxt={t("pricing")}
              title={railAsset?.attributes?.price_table?.title || ""}
              priceImage={
                railAsset?.attributes?.price_table?.price_image?.data
                  ?.attributes?.url || ""
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
            railAsset?.attributes?.others as Maybe<
              ComponentTruckingOtherService[]
            >
          }
        />
      </div>
    </Fragment>
  );
};

export default ServiceRailTransport;
