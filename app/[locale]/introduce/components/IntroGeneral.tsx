import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = {
  assets: {
    image: string;
    sub_image: string;
    title: string;
    content: string;
  };
  className?: string;
};

const IntroGeneral: FC<Props> = ({ assets, className = "" }) => {
  const t = useTranslations("introduce");

  return (
    <section className={`relative ${className}`}>
      <div className="flex items-center gap-[60px]">
        <div>
          <div className="relative animation" data-animation-delay="0.4s">
            <Image
              src={assets.image}
              alt=""
              width={700}
              height={480}
              className="rounded-lg"
            />
            <Image
              src={assets.sub_image}
              alt=""
              width={310}
              height={300}
              className="rounded-lg absolute -bottom-8 -right-8 shadow-[-31px_-31px_#fff]"
            />
          </div>
        </div>
        <div>
          <p className="section-name-left mb-6 animation">{t("common")}</p>
          {!!assets.title && (
            <h4
              className="text-th-gray-400 font-semibold text-2xl mt-12 animation"
              data-animation-delay="0.3s"
            >
              {assets.title}
            </h4>
          )}
          {!!assets.content && (
            <div
              className="mt-6 max-w-[735px] animation"
              data-animation-delay="0.4s"
            >
              {assets.content.split("\n").map((item, index) => (
                <p
                  key={index}
                  className="text-base text-th-gray-300 font-medium mb-4 last:mb-0"
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntroGeneral;
