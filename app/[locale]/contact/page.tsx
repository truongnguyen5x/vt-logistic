import React, { Fragment } from "react";
import { Map, Marker } from "pigeon-maps";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { fetchAsset } from "@api/index";
import { ILocale } from "@configs/i18n";
import Banner from "@components/Banner";
import BreadCrumbs from "@components/Breadcrumbs";
import Image from "next/image";
import MapContact from "./components/Map";
import { getClient } from "@api/graphql-client";
import { gql } from "@generated/gql";
import { getLanguageForApi, getPrefixImageUrl } from "@ultility/index";
import { getContactQueryString } from "@api/contact.graghql";

const getContactAsset = async (locale: ILocale) => {
  const { data } = await getClient().query({
    query: gql(getContactQueryString),
    variables: { locale: getLanguageForApi(locale) },
  });

  // get last element
  return data.contacts?.data[data?.contacts?.data?.length - 1];
};


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
      <Banner image={getPrefixImageUrl(contactAsset?.attributes?.banner?.data?.attributes?.url)} title={t("title")} />
      <div className="container mx-auto">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-20" />
        {!!contactAsset?.attributes?.contacts?.length && (
          <div className="flex gap-20">
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
                <div className="animation text-th-gray-300 font-medium text-base mb-[6px]">{`${t(
                  "hotline"
                )}: ${item?.hotline || ""}`}</div>
                <div className="animation text-th-gray-300 font-medium text-base">{`${t(
                  "email"
                )}: ${item?.email || ""}`}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="relative">
        <div className="container mx-auto flex gap-20 mt-32 ">
          <div>
            <h4 className="animation section-name-left mb-11">
              {t("contact_we")}
            </h4>
            <div className="flex gap-[30px] items-center mb-8">
              <div className="animation">
                <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
                  {t("form.title")}
                </div>
                <input
                  className="bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-[327px]"
                  placeholder={t("form.placeholder_title")}
                />
              </div>
              <div className="animation">
                <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
                  {t("form.fullname")}
                </div>
                <input
                  className="bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-[327px]"
                  placeholder={t("form.placeholder_fullname")}
                />
              </div>
            </div>
            <div className="flex gap-[30px] items-center mb-8">
              <div className="animation">
                <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
                  {t("form.phone_number")}
                </div>
                <input
                  className="bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-[327px]"
                  placeholder={t("form.placeholder_phone_number")}
                />
              </div>
              <div className="animation">
                <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
                  {t("form.email")}
                </div>
                <input
                  className="bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-[327px]"
                  placeholder={t("form.placeholder_email")}
                />
              </div>
            </div>
            <div className="mb-8 animation">
              <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
                {t("form.address")}
              </div>
              <input
                className="bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-[685px]"
                placeholder={t("form.placeholder_address")}
              />
            </div>
            <div className="mb-8 animation">
              <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
                {t("form.note")}
              </div>
              <textarea
                className="bg-th-gray-220 focus-visible:outline-none px-6 py-4 w-full"
                rows={4}
                placeholder={t("form.placeholder_note")}
              />
            </div>
            <button className="animation bg-th-red-500 text-white text-2xl font-medium text-center w-full rounded-[50px] py-5 mb-32">
              {t("form.button")}
            </button>
          </div>
          <div />
        </div>
        <MapContact />
      </div>
    </Fragment>
  );
};

export default Contact;
