import { ComponentIntroduceReasonsChooseWe } from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

type Props = {
  className?: string;
  assets: ComponentIntroduceReasonsChooseWe | null;
};

const Reasons: FC<Props> = ({ className = "", assets }) => {
  const t = useTranslations("introduce");

  return (
    <section className={`relative bg-th-gray-250 ${className}`}>
      {!!assets?.image?.data?.attributes?.url && (
        <div className="absolute top-0 left-[calc(50%_-_550px)] max-xl:hidden">
          <Image
            src={getPrefixImageUrl(assets?.image?.data?.attributes?.url)}
            alt=""
            width={1155}
            height={632}
          />
        </div>
      )}
      <div className="container px-4 md:mx-auto py-10 md:py-20">
        <div className="flex items-center justify-start md:justify-center">
          <p className="section-name mb-6 animation max-md:after:left-16 max-md:text-left">{t("reason")}</p>
        </div>
        <p
          className="mt-6 md:mt-10 text-base font-medium text-th-gray-300 md:text-center animation"
          data-animation-delay="0.3s"
        >
          {assets?.description}
        </p>
        {!!assets?.reasons?.length && (
          <div
            className="grid grid-cols-2 gap-y-6 max-md:grid-cols-1 md:gap-10 xl:gap-x-[150px] xl:gap-y-20 mt-6 md:mt-[55px] animation"
            data-animation-delay="0.4s"
          >
            {assets.reasons.map((item, index) => (
              <div key={index} className="flex items-start gap-8">
                <Image
                  src={getPrefixImageUrl(item?.icon?.data?.attributes?.url)}
                  alt=""
                  width={50}
                  height={50}
                />
                <div>
                  <h4 className="text-[25px] font-bold text-th-gray-500 mb-4">
                    {item?.title}
                  </h4>
                  <p className="text-base text-th-gray-300 font-medium">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Reasons;
