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

type IContact = {
  image: string;
  title: string;
  description: string;
  role: string;
  hotline?: string;
  email?: string;
};

type IDataContact = {
  contact: {
    banner: string;
    contacts: IContact[];
  };
};

const Contact = async () => {
  const locale = useLocale();
  const t = await getTranslations("contact");

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("title"), link: "#", active: true },
  ];

  const data: IDataContact = await fetchAsset("contact", locale as ILocale);
  return (
    <Fragment>
      <Banner image={data.contact.banner} title={t("title")} />
      <div className="container mx-auto">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-20" />
        {!!data.contact.contacts.length && (
          <div className="flex gap-20">
            {data.contact.contacts.map((item, index) => (
              <div key={index} className="flex flex-col">
                <Image src={item.image} alt="" height={64} width={64} />
                <h5 className="text-th-gray-500 font-bold text-[25px] leading-[26px] mt-[22px] mb-3">
                  {item.title}
                </h5>
                <p className="text-th-gray-300 text-base flex-1 font-medium max-w-[456px]">
                  {item.description}
                </p>
                <div className="h-[3px] w-[120px] bg-th-red-500 my-3"></div>
                <div className="text-th-gray-300 font-medium text-base mb-[6px]">
                  {item.role}
                </div>
                <div className="text-th-gray-300 font-medium text-base mb-[6px]">{`${t(
                  "hotline"
                )}: ${item.hotline || ""}`}</div>
                <div className="text-th-gray-300 font-medium text-base">{`${t(
                  "email"
                )}: ${item.email || ""}`}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-[100px] flex gap-20 items-center justify-end max-2xl:ml-8">
        <div>
          <h4 className="section-name-left mb-11">{t("contact_we")}</h4>
          <div className="flex gap-[30px] items-center mb-8">
            <div>
              <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
                {t("form.title")}
              </div>
              <input
                className="bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-[327px]"
                placeholder={t("form.placeholder_title")}
              />
            </div>
            <div>
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
            <div>
              <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
                {t("form.phone_number")}
              </div>
              <input
                className="bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-[327px]"
                placeholder={t("form.placeholder_phone_number")}
              />
            </div>
            <div>
              <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
                {t("form.email")}
              </div>
              <input
                className="bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-[327px]"
                placeholder={t("form.placeholder_email")}
              />
            </div>
          </div>
          <div className="mb-8">
            <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
              {t("form.address")}
            </div>
            <input
              className="bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-[685px]"
              placeholder={t("form.placeholder_address")}
            />
          </div>
          <div className="mb-8">
            <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
              {t("form.note")}
            </div>
            <textarea
              className="bg-th-gray-220 focus-visible:outline-none px-6 py-4 w-full"
              rows={4}
              placeholder={t("form.placeholder_note")}
            />
          </div>
          <button className="bg-th-red-500 text-white text-2xl font-medium text-center w-full rounded-[50px] py-5">
            {t("form.button")}
          </button>
        </div>
        <MapContact />
      </div>
    </Fragment>
  );
};

export default Contact;
