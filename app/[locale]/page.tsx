import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { Fragment } from "react";
import styles from "./styles.module.scss";
import { useLocale } from "next-intl";
import content from "./content.json";

const getData = (locale: string) => {
  //@ts-ignore
  return content[locale];
};

export default function Home() {
  const locale = useLocale();
  const data = getData(locale);
  const t = useTranslations("Index");
  return (
    <Fragment>
      <section className={[styles.banner].join(" ")}></section>
      <section className={[styles.feature].join(" ")}>
        <div className="container flex justify-center items-center">
          {data.features.map((i: any, index: number) => (
            <div key={index}>{i.title}</div>
          ))}
        </div>
      </section>
    </Fragment>
  );
}
