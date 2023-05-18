import { useTranslations } from "next-intl";
import { FC } from "react";
import styles from "./styles.module.scss";
import SliderIntro from "./Slider";

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
  const t = useTranslations("home");
  return (
    <section className="container mx-auto pt-20">
      <p className="animation section-name mb-6">{t("about_us")}</p>
      <div className="mt-16" />
      <SliderIntro content={content} />
    </section>
  );
};

export default AboutUs;