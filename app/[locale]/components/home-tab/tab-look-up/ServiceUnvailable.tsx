import { FC, Fragment } from "react";

import Image from "next/image";
import ExitImg from "@assets/images/icons/exit.svg";
import { useTranslations } from "next-intl";

const ServiceUnavailable = () => {
  const t = useTranslations("home");
  return (
    <Fragment>
      <div className="flex flex-col justify-center items-center gap-5 h-[447px]">
        <Image src={ExitImg} width={80} height={80} alt="exit" />
        <p className="text-th-gray-300 font-semibold text-2xl">
          {t("service_unavailable")}
        </p>
      </div>
    </Fragment>
  );
};
export default ServiceUnavailable;
