import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC, Fragment } from "react";
import ChevronRight from "@assets/images/icons/chevron-right.svg";
import { ComponentIntroduceCoreValues } from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";

type Props = {
  assets: ComponentIntroduceCoreValues | null;
  className?: string;
};
const CoreValues: FC<Props> = ({ assets, className = "" }) => {
  const t = useTranslations("introduce");

  return (
    <section className={`container px-4 md:mx-auto mt-16 md:mt-[445px] ${className}`}>
      <div className="flex items-start lg:items-center xl:items-start gap-6 md:gap-10 lg:gap-20 max-lg:flex-col-reverse">
        <Image
          src={getPrefixImageUrl(assets?.image?.data?.attributes?.url)}
          alt=""
          width={300}
          height={300}
          className="max-lg:w-full max-xl:w-[400px] h-full xl:w-[725px] xl:h-[432px] animation"
        />
        <div>
          <p className="section-name-left max-sm:text-left max-sm:after:left-0 max-sm:after:translate-x-0 max-lg:text-center max-lg:after:left-1/2 max-lg:after:-translate-x-1/2 animation">{t("core_values")}</p>
          <div className="mt-10">
            <h4
              className="text-th-gray-400 font-semibold text-[25px] mb-6 animation"
              data-animation-delay="0.3s"
            >
              {assets?.center_customer_title}
            </h4>
            <p
              className="text-base font-medium text-th-gray-300 animation"
              data-animation-delay="0.4s"
            >
              {assets?.center_customer_content}
            </p>
            <h4
              className="text-th-gray-400 font-semibold text-[25px] mb-6 mt-10 animation"
              data-animation-delay="0.5s"
            >
              {assets?.kindness_title}
            </h4>
            <div className="animation" data-animation-delay="0.6s">
              {!!assets?.kindness_content?.length &&
                assets?.kindness_content.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 mb-4 last:mb-0"
                  >
                    <Image src={ChevronRight} alt="" width={24} height={24} />
                    <div className="text-th-gray-500 text-base font-medium">
                      {item?.title}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
