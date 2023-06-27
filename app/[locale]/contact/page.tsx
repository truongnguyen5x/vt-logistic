import React, { Fragment } from "react";
import { Map, Marker } from "pigeon-maps";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { ILocale } from "@type/locale";
import Banner from "@components/Banner";
import BreadCrumbs from "@components/Breadcrumbs";
import Image from "next/image";
import MapContact from "@components/Map";
import { getClient } from "@graphql/graphql-client";
import { gql } from "@generated/gql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";
import { getContactQueryString } from "@graphql/contact.graghql";
import FormContainer from "./components/FormContainer";
import { Metadata } from "next";
import Link from "next-intl/link";

const getContactAsset = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getContactQueryString),
    variables: { locale: getLanguageForApi(locale) },
  });

  // get last element
  return data.contacts?.data[data?.contacts?.data?.length - 1];
};

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;

  // fetch data
  const [assetData] = await Promise.all([getContactAsset(locale as ILocale)]);

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

const Contact = async () => {
  const locale = useLocale();

  const [contactAsset, t] = await Promise.all([
    getContactAsset(locale as ILocale),
    getTranslations("contact"),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("title"), link: "#", active: true },
  ];

  return (
    <Fragment>
      <Banner
        image={getPrefixImageUrl(
          contactAsset?.attributes?.banner?.data?.attributes?.url
        )}
        title={t("title")}
      />
      <div className="container mx-auto px-4 md:px-6 2xl:px-0">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="my-6 xl:mb-20" />
        {!!contactAsset?.attributes?.contacts?.length && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-20">
            {contactAsset.attributes.contacts.map((item, index) => (
              <div key={index} className="flex flex-col">
                <Image
                  src={getPrefixImageUrl(item?.icon?.data?.attributes?.url)}
                  alt=""
                  className="animation"
                  height={64}
                  width={64}
                />
                <h5 className="animation text-th-gray-500 font-bold text-[25px] leading-[26px] mt-[22px] mb-3">
                  {item?.title}
                </h5>
                <p className="animation text-th-gray-300 text-base flex-1 font-medium max-w-[456px]">
                  {item?.description}
                </p>
                <div className="animation h-[3px] w-[120px] bg-th-red-500 my-3"></div>
                <div className="animation text-th-gray-300 font-medium text-base mb-[6px]">
                  {item?.role}
                </div>
                <Link
                  href={`tel:${item?.hotline}`}
                  className="animation text-th-gray-300 font-medium text-base mb-[6px]"
                >{`${t("hotline")}: ${item?.formatted_hotline || ""}`}</Link>
                <Link
                  href={`mailto:${item?.email}`}
                  className="animation text-th-gray-300 font-medium text-base"
                >{`${t("email")}: ${item?.email || ""}`}</Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="relative">
        <div className="container mx-auto px-4 md:px-6 2xl:px-0 flex flex-col xl:flex-row gap-20 mt-32 ">
          <div>
            <h4 className="animation section-name-left mb-11">
              {t("contact_we")}
            </h4>
            <FormContainer
              title={{
                title: t("form.title"),
                fullname: t("form.fullname"),
                phone_number: t("form.phone_number"),
                email: t("form.email"),
                address: t("form.address"),
                note: t("form.note"),
                text_button: t("form.button"),
              }}
              requiredTxt={t("form.required")}
              emailRequiredTxt={t("form.email_required")}
              successTxt={t("success")}
              placeholder={{
                title: t("form.placeholder_title"),
                fullname: t("form.placeholder_fullname"),
                phone_number: t("form.placeholder_phone_number"),
                email: t("form.placeholder_email"),
                address: t("form.placeholder_address"),
                note: t("form.placeholder_note"),
              }}
              locale={locale as ILocale}
            />
          </div>
        </div>
        <MapContact />
      </div>
    </Fragment>
  );
};

export default Contact;
