import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";
import Banner from "@components/Banner";
import { fetchAsset } from "@api/index";
import { ILocale } from "@configs/i18n";
import BreadCrumbs from "@components/Breadcrumbs";
import Image from "next/image";
import styles from "./style.module.scss";
import RightDarkImg from "@assets/images/icons/arrow_right_2_dark.svg";

type IServiceTruckingAsset = {
  bg_img: string;
  description: string;
  intro_img: string;
  intro_sub_img: string;
  intros: Array<{ img: string; title: string; txt: string }>;
  internal: Array<{ title: string; des: string }>;
  internal_img: string;
  internaltional: Array<{ title: string; des: string }>;
  international_img: string;
  other_service: Array<{ txt: string; url: string; img: string }>;
};

const ServiceTrucking = async () => {
  const locale = useLocale();
  const [truckingAsset, t] = await Promise.all([
    fetchAsset<IServiceTruckingAsset>("trucking", locale as ILocale),
    getTranslations("trucking"),
  ]);

  const breadcrumbs = [
    { title: t("breadcrumbs.home"), link: "#" },
    { title: t("breadcrumbs.service"), link: "/service" },
    {
      title: t("breadcrumbs.trucking"),
      link: "/service/trucking",
      active: true,
    },
  ];

  return (
    <Fragment>
      <Banner image={truckingAsset.bg_img} title={t("title")} />
      <div className="container mx-auto">
        <BreadCrumbs breadcrumbs={breadcrumbs} className="mt-6 mb-10" />
        <h3 className="section-name mb-10 animation">{t("title")}</h3>
        <p
          className="text-th-gray-300 font-medium text-base whitespace-pre-line text-center animation"
          data-animation-delay="0.3s"
        >
          {truckingAsset.description}
        </p>
        <div className="flex gap-24 mt-14 mb-28">
          <div>
            <div className="relative animation" data-animation-delay="0.4s">
              <Image
                src={truckingAsset.intro_img}
                alt=""
                width={700}
                height={480}
                className="rounded-lg"
              />
              <Image
                src={truckingAsset.intro_sub_img}
                alt=""
                width={310}
                height={300}
                className="rounded-lg absolute -bottom-8 -right-8 shadow-[-31px_-31px_#fff]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {truckingAsset.intros.map((intro, idx) => (
              <div
                key={idx}
                className="flex animation gap-3 items-start"
                data-animation-delay={`${0.3 + 0.1 * idx}s`}
              >
                <Image src={intro.img} width={64} height={64} alt="" />
                <div>
                  <p className={styles.introItem}>{intro.title}</p>
                  <p className="text-base text-th-gray-300 font-medium">
                    {intro.txt}
                  </p>
                </div>
              </div>
            ))}
            <button className="btn-red mt-6">{t("create_order")}</button>
          </div>
        </div>
      </div>
      <div className="bg-th-gray-250 py-28">
        <div className="container mx-auto flex">
          <div className="min-w-0">
            <h3 className="section-name-left mb-11">
              {t("domestic_shipping")}
            </h3>
            {truckingAsset.internal.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 my-6">
                <Image
                  className="mt-2"
                  src={RightDarkImg}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className="mr-10">
                  <p className={styles.domesticItem}>{item.title}</p>
                  <p className="text-base text-th-gray-300 font-medium">
                    {item.des}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex gap-6 mt-9">
              <button className="btn-red">{t("create_order")}</button>
              <button className="btn-gray-outlined">{t("pricing")}</button>
            </div>
          </div>
          <div className="self-center">
            <Image
              src={truckingAsset.internal_img}
              width={735}
              height={400}
              alt=""
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ServiceTrucking;
