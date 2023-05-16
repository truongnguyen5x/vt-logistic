import React, { Fragment, Suspense } from "react";
import styles from "./styles.module.scss";
import { useLocale, useTranslations } from "next-intl";
import { fetchAsset, fetchHomePost } from "@api/index";
import { ILocale, i18n } from "@configs/i18n";
import SliderHome from "./components/Slider";
import AboutUs, { IAbout } from "./components/about";
import Image from "next/image";
import AboutInfoTab, { IAboutContent } from "./components/tab";
import Partner, { IPartner } from "./components/Partner";
import ListPost from "./components/post";
import FormRegister, { IFormRegister } from "./components/FormRegister";

type IContent = {
  banner: string[];
  features: Array<{ image: string; title: string }>;
  abouts: IAbout[];
  abouts_content: IAboutContent;
  list_partner: IPartner;
  news: { title: string; learn_more: string; detail: string };
  form_register: IFormRegister;
};

// TODO: generateStaticParams what for?
// export async function generateStaticParams() {
//   return i18n.locales.map((i: ILocale) => ({ locale: i }));
// }

export default async function Home({ params }: { params: { lang: ILocale } }) {
  const assetData: IContent = await fetchAsset(
    "home",
    params.lang || i18n.defaultLocale
  );

  const listHomePost = fetchHomePost(params.lang || i18n.defaultLocale);

  return (
    <Fragment>
      <SliderHome images={assetData.banner} />
      <section className={[styles.feature].join(" ")}>
        <div className="container mx-auto flex  items-center justify-between my-4">
          {assetData.features.map((i, index: number) => (
            <div
              key={index}
              className={[
                styles.featureItem,
                "animate__animated animate__fadeInDown animate__delay-1s",
              ].join(" ")}
            >
              <Image src={i.image} alt="" width={50} height={50} />
              <p>{i.title}</p>
            </div>
          ))}
        </div>
      </section>
      <AboutUs content={assetData.abouts} />
      <AboutInfoTab assets={assetData.abouts_content} />
      <Partner assets={assetData.list_partner} />
      <Suspense fallback={<div>Loading...</div>}>
        <ListPost
          title={assetData.news.title}
          detail={assetData.news.detail}
          learn_more={assetData.news.learn_more}
          promise={listHomePost}
        />
      </Suspense>
      <FormRegister assets={assetData.form_register} />
    </Fragment>
  );
}
