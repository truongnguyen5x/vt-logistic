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
import ListPost from "./components/ListPost";

type IContent = {
  banner: string[];
  features: Array<{ image: string; title: string }>;
  abouts: IAbout[];
  abouts_content: IAboutContent;
  list_partner: IPartner;
  news: { title: string; learn_more: string };
};

// TODO: generateStaticParams what for?
// export async function generateStaticParams() {
//   return i18n.locales.map((i: ILocale) => ({ locale: i }));
// }

export default async function Home({ params }: { params: { lang: ILocale } }) {
  const data: IContent = await fetchAsset(
    "home",
    params.lang || i18n.defaultLocale
  );

  const listHomePost = fetchHomePost(params.lang || i18n.defaultLocale);

  return (
    <Fragment>
      <SliderHome images={data.banner} />
      <section className={[styles.feature].join(" ")}>
        <div className="container mx-auto flex  items-center justify-between my-4">
          {data.features.map((i, index: number) => (
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
      <AboutUs content={data.abouts} />
      <AboutInfoTab data={data.abouts_content} />
      <Partner data={data.list_partner} />
      <Suspense fallback={<div>Loading...</div>}>
        <ListPost
          title={data.news.title}
          learn_more={data.news.learn_more}
          promise={listHomePost}
        />
      </Suspense>
    </Fragment>
  );
}
