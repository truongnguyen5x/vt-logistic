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
import { ComponentTruckingOtherService, Maybe } from "@generated/graphql";
import { ApolloWrapper } from "@graphql/client";
import { Metadata } from "next";
import PricePopup from "@components/price-popup";
import clsx from "clsx";

const getTruckingAsset = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getTruckingQueryString),
    variables: { locale: getLanguageForApi(locale) },
  });

  // get last element
  return data.truckings?.data[data?.truckings?.data?.length - 1];
};

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;

  // fetch data
  const [assetData] = await Promise.all([getTruckingAsset(locale as ILocale)]);

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

const ServiceTrucking = async () => {
  const locale = useLocale();
  const [truckingAsset, t, message] = await Promise.all([
    getTruckingAsset(locale as ILocale),
    getTranslations("trucking"),
    import(`../../../../../dictionaries/${locale}.json`),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.service"), link: "/service" },
    {
      title: t("breadcrumbs.trucking"),
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
      <div className="container max-md:px-4 max-xl:px-6 mx-auto">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-10" />
        <h3 className="section-name mb-10 animation">{t("title")}</h3>
        <p
          className="text-th-gray-300 font-medium text-lg whitespace-pre-line text-center animation"
          data-animation-delay="0.3s"
        >
          {truckingAsset?.attributes?.description}
        </p>
        <div className="flex max-xl:flex-col gap-6 xl:gap-24 mt-6 mb-10 xl:mt-14 xl:mb-28">
          <div>
            <div className="relative animation" data-animation-delay="0.4s">
              <Image
                src={getPrefixImageUrl(
                  truckingAsset?.attributes?.intro_img?.data?.attributes?.url
                )}
                alt=""
                width={700}
                height={480}
                className="rounded-lg h-60 md:h-80 xl:h-96 object-cover"
              />
              <Image
                src={getPrefixImageUrl(
                  truckingAsset?.attributes?.sub_intro_img?.data?.attributes
                    ?.url
                )}
                alt=""
                width={310}
                height={300}
                className={clsx(
                  "absolute -bottom-8 -right-8 max-xl:bottom-0 max-xl:right-0",
                  "rounded-lg object-cover max-md:hidden",
                  "shadow-[-31px_-31px_#fff] max-xl:shadow-[0_0_0_14x_#fff]",
                  "h-36 xl:h-48"
                )}
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
              <NextIntlClientProvider
                locale={locale}
                messages={message.default}
              >
                <ResgisterPopup locale={locale as ILocale} />
              </NextIntlClientProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-th-gray-250 py-10 xl:py-28">
        <div className="container max-md:px-4 max-xl:px-6 mx-auto flex">
          <div className="min-w-0 max-lg:flex-grow lg:basis-1/2">
            <h3
              className={clsx(
                "section-name-left mb-11 animation max-lg:text-center",
                "max-lg:after:left-1/2 max-lg:after:-translate-x-1/2"
              )}
            >
              {t("domestic_shipping")}
            </h3>
            <div className="self-center lg:hidden animation">
              <Image
                src={getPrefixImageUrl(
                  truckingAsset?.attributes?.internal_img?.data?.attributes?.url
                )}
                width={735}
                height={400}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
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
                    width={20}
                    height={20}
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
            <div className="flex max-md:flex-col-reverse gap-6 mt-9">
              <NextIntlClientProvider
                locale={locale}
                messages={message.default}
              >
                <ResgisterPopup
                  type="trucking_domestic"
                  locale={locale as ILocale}
                />
              </NextIntlClientProvider>
              <PricePopup
                buttonTxt={t("pricing")}
                title={
                  truckingAsset?.attributes?.internal_price_table?.title || ""
                }
                priceImage={
                  truckingAsset?.attributes?.internal_price_table?.price_image
                    ?.data?.attributes?.url || ""
                }
              />
            </div>
          </div>
          <div className="self-center max-lg:hidden lg:basis-1/2 xl:h-[450px] animation">
            <Image
              src={getPrefixImageUrl(
                truckingAsset?.attributes?.internal_img?.data?.attributes?.url
              )}
              width={735}
              height={400}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="container max-md:px-4 max-xl:px-6 mx-auto flex py-10 xl:py-28 gap-16">
        <div className="self-center max-lg:hidden lg:basis-1/2 lg:h-[450px]">
          <Image
            src={getPrefixImageUrl(
              truckingAsset?.attributes?.international_img?.data?.attributes
                ?.url
            )}
            width={735}
            height={400}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0 max-lg:flex-grow lg:basis-1/2">
          <h3 className="section-name-left mb-11 animation max-lg:text-center max-lg:after:left-1/2 max-lg:after:-translate-x-1/2">
            {t("international_shipping")}
          </h3>
          <div className="self-center lg:hidden">
            <Image
              src={getPrefixImageUrl(
                truckingAsset?.attributes?.international_img?.data?.attributes
                  ?.url
              )}
              width={735}
              height={400}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
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
                    width={20}
                    height={20}
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
          <div className="flex max-md:flex-col-reverse gap-6 mt-9">
            <NextIntlClientProvider locale={locale} messages={message.default}>
              <ResgisterPopup locale={locale as ILocale} />
            </NextIntlClientProvider>
            <PricePopup
              buttonTxt={t("pricing")}
              title={
                truckingAsset?.attributes?.international_price_table?.title ||
                ""
              }
              priceImage={
                truckingAsset?.attributes?.international_price_table
                  ?.price_image?.data?.attributes?.url || ""
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
