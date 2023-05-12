import { useTranslations } from "next-intl";
import { FC } from "react";
import styles from "./styles.module.scss";
import SliderIntro from "./SliderIntro";

export type IAbout = {
  heading: string;
  subject: string;
  detail: string;
};

type IAboutProps = {
  content: IAbout[];
};
const AboutUs: FC<IAboutProps> = ({ content }) => {
  const t = useTranslations("section_name");
  return (
    <section className="container mx-auto pt-20">
      <p className="section-name">{t("about_us")}</p>
      <div className="mt-16" />
      <SliderIntro content={content} />
    </section>
  );
};

export default AboutUs;
