import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

type Props = {
  className?: string;
  data: {
    image?: string;
    description: string;
    reasons: Array<{
      image: string;
      title: string;
      content: string;
    }>;
  };
};
const Reasons: FC<Props> = ({ className = "", data }) => {
  const t = useTranslations("introduce");

  return (
    <section className={`relative bg-th-gray-250 ${className}`}>
      {!!data.image && (
        <div className="absolute top-0 left-[calc(50%_-_550px)]">
          <Image src={data.image} alt="" width={1155} height={632} />
        </div>
      )}
      <div className="container mx-auto py-20">
        <div className="flex items-center justify-center">
          <p className="section-name">{t("reason")}</p>
        </div>
        <p className="mt-10 text-base font-medium text-th-gray-300 text-center">
          {data.description}
        </p>
        {!!data.reasons.length && (
          <div className="grid grid-cols-2 gap-x-[150px] gap-y-20 mt-[55px]">
            {data.reasons.map((item, index) => (
              <div key={index} className="flex items-start gap-8">
                <Image src={item.image} alt="" width={50} height={50} />
                <div>
                  <h4 className="text-[25px] font-bold text-th-gray-500 mb-4">
                    {item.title}
                  </h4>
                  <p className="text-base text-th-gray-300 font-medium">
                    {item.content}
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