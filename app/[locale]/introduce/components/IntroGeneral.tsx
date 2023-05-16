import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = {
  data: {
    image: string;
    sub_image: string;
    title: string;
    content: string;
  };
  className?: string;
};

const IntroGeneral: FC<Props> = ({ data, className = "" }) => {
  const t = useTranslations("introduce");

  return (
    <section className={`relative ${className}`}>
      <div className="flex items-center gap-[60px]">
        <div>
          <div className="relative">
            <Image
              src={data.image}
              alt=""
              width={700}
              height={480}
              className="rounded-lg"
            />
            <Image
              src={data.sub_image}
              alt=""
              width={310}
              height={300}
              className="rounded-lg absolute -bottom-8 -right-8 shadow-[-31px_-31px_#fff]"
            />
          </div>
        </div>
        <div>
          <h3 className="text-th-gray-400 font-semibold text-4xl relative after:content-[''] after:left-0 after:absolute after:-bottom-2 after:w-[120px] after:h-[3px] after:bg-th-red-500">
            {t("common")}
          </h3>
          {!!data.title && (
            <h4 className="text-th-gray-400 font-semibold text-2xl mt-12">
              {data.title}
            </h4>
          )}
          {!!data.content && (
            <div className="mt-6 max-w-[735px]">
              {data.content.split("\n").map((item, index) => (
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