import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ComponentIntroduceGeneral } from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";
import clsx from "clsx";

type Props = {
  assets: ComponentIntroduceGeneral | null;
  className?: string;
};

const IntroGeneral: FC<Props> = ({ assets, className = "" }) => {
  const t = useTranslations("introduce");

  return (
    <section className={clsx("relative", className)}>
      <div className="flex items-center max-md:flex-col-reverse gap-6 md:gap-[60px]">
        <div>
          <div className="relative animation" data-animation-delay="0.4s">
            <Image
              src={getPrefixImageUrl(assets?.image?.data?.attributes?.url)}
              alt=""
              width={700}
              height={480}
              className="rounded-lg"
            />
            <Image
              src={getPrefixImageUrl(assets?.sub_image?.data?.attributes?.url)}
              alt=""
              width={310}
              height={300}
              className="rounded-lg max-xl:hidden absolute -bottom-8 -right-8 shadow-[-31px_-31px_#fff]"
            />
          </div>
        </div>
        <div>
          <p className="section-name-left mb-6 animation">{t("common")}</p>
          {!!assets?.title && (
            <h4
              className="text-th-gray-400 font-semibold text-2xl mt-12 animation"
              data-animation-delay="0.3s"
            >
              {assets?.title}
            </h4>
          )}
          {!!assets?.content && (
            <div
              className="mt-6 max-w-[735px] animation"
              data-animation-delay="0.4s"
            >
              <p className="text-base text-th-gray-300 font-medium mb-4 whitespace-break-spaces last:mb-0">
                {assets.content}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntroGeneral;
