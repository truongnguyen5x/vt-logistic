import React, { Fragment } from "react";
import styles from "./styles.module.scss";
import { useLocale } from "next-intl";
import { fetchAsset } from "@api/index";
import { ILocale, i18n } from "@configs/i18n";
import SliderHome from "./components/Slider";
import AboutUs, { IAbout } from "./components/about";
import Image from "next/image";

type IContent = {
  banner: string[];
  features: Array<{ image: string; title: string }>;
  abouts: IAbout[];
};

// export async function generateStaticParams() {
//   return i18n.locales.map((i: ILocale) => ({ locale: i }));
// }

export default async function Home() {
  const locale = useLocale();

  const data: IContent = await fetchAsset("home", locale as ILocale);

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
    </Fragment>
  );
}
