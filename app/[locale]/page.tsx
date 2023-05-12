import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { Fragment } from "react";
import styles from "./styles.module.scss";
import { useLocale } from "next-intl";
import { fetchAsset } from "@api/index";
import { ILOCALE } from "@type/locale";
import SliderHome from "./components/Slider";
import AboutUs, { IAbout } from "./components/AboutUs";

type IContent = {
  banner: string[];
  features: Array<{ image: string; title: string }>;
  abouts: IAbout[];
};

export default async function Home() {
  const locale = useLocale();

  const data: IContent = await fetchAsset("home", locale as ILOCALE);

  return (
    <Fragment>
      <SliderHome images={data.banner} />
      <section className={[styles.feature].join(" ")}>
        <div className="container mx-auto flex  items-center justify-between my-4">
          {data.features.map((i, index: number) => (
            <div key={index} className={styles.featureItem}>
              <img src={i.image} />
              <p>{i.title}</p>
            </div>
          ))}
        </div>
      </section>
      <AboutUs content={data.abouts} />
    </Fragment>
  );
}
