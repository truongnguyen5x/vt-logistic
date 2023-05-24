import styles from "@app/styles.module.scss";
import Image from "next/image";
import ArrowListImg from "@assets/images/icons/arrow_list.svg";
import { FC } from "react";
import RightImg from "@assets/images/icons/arrow_right_2.svg";
import Link from "next-intl/link";
import { useRouter } from "next-intl/client";
import { ComponentHomeHomeService, Maybe } from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";
import { useTranslations } from "next-intl";

interface TabMyServiceProps {
  services?: Maybe<Array<Maybe<ComponentHomeHomeService>>>;
}

const TabMyService: FC<TabMyServiceProps> = ({ services }) => {
  const t = useTranslations("home");
  const router = useRouter();

  const handleClickAllService = () => {
    router.push("/service");
  };

  return (
    <div className="container mx-auto">
      <div className={styles.bgMyService}>
        <Image
          src={getPrefixImageUrl(
            services?.[0]?.background?.data?.attributes?.url
          )}
          alt=""
          width={1530}
          height={417}
        />
        {services?.map((service, idx) => (
          <div key={idx} className={styles.serviceItem}>
            <Link href={service?.url || "#"} className={styles.serviceLink}>
              <Image
                src={getPrefixImageUrl(service?.icon?.data?.attributes?.url)}
                alt=""
                width={60}
                height={60}
              />
              <p className={service?.subs ? "mb-3" : ""}>{service?.title}</p>
            </Link>
            {!!service?.subs &&
              service?.subs.map((sub, idx2) => (
                <div key={idx2} className={styles.serviceDes}>
                  <Image
                    src={ArrowListImg}
                    alt="arrow"
                    width={13}
                    height={13}
                  />

                  <p>{sub?.title}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className="text-center mt-8 mb-20">
        <button className="btn-red" onClick={handleClickAllService}>
          {t("all_service")}
          <Image src={RightImg} width={28} height={28} alt="" />
        </button>
      </div>
    </div>
  );
};

export default TabMyService;
