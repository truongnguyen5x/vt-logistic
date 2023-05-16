import { useTranslations } from "next-intl";
import { FC } from "react";
import styles from "./styles.module.scss";
import SliderIntro from "./SliderIntro";

export type IAbout = {
  is_plus: boolean;
  heading: number;
  subject: string;
  detail: string;
};

type IAboutProps = {
  content: IAbout[];
};
const AboutUs: FC<IAboutProps> = ({ content }) => {
  const t = useTranslations("section");
  return (
    <section className="container mx-auto pt-20">
      <p className="section-name animate__animated  animate__fadeInDown animate__delay-1s">
        {t("about_us")}
      </p>
      <div className="mt-16" />
      <SliderIntro content={content} />
    </section>
  );
};

export default AboutUs;
