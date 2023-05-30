import { FC, Fragment } from "react";
import styles from "@app/styles.module.scss";
import Image from "next/image";
import ExitImg from "@assets/images/icons/exit.svg";
import { useTranslations } from "next-intl";
import ArrowLeftImg from "@assets/images/icons/arrow_left.svg";

interface Props {
  onBack: () => void;
}

const ServiceUnavailable: FC<Props> = ({ onBack }) => {
  const t = useTranslations("home");

  return (
    <Fragment>
      <div className="flex flex-col justify-center items-center gap-5 h-[447px]">
        <Image src={ExitImg} width={80} height={80} alt="exit" />
        <p className="text-th-gray-300 font-semibold text-2xl">
          {t("service_unavailable")}
        </p>
        <button className={styles.formBack} onClick={onBack}>
          <Image src={ArrowLeftImg} width={40} height={40} alt="prev" />
          {t("back")}
        </button>
      </div>
    </Fragment>
  );
};
export default ServiceUnavailable;
