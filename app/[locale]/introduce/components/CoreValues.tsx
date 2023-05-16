import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC, Fragment } from "react";
import ChevronRight from "@assets/images/icons/chevron-right.svg";

type Props = {
  data: {
    image: string;
    center_customer: {
      title: string;
      content: string;
    };
    kindness: {
      title: string;
      content: string[];
    };
  };
  className?: string;
};
const CoreValues: FC<Props> = ({ data, className = "" }) => {
  const t = useTranslations("introduce");

  return (
    <section className={`container mx-auto mt-[445px] ${className}`}>
      <div className="flex items-start gap-20">
        <Image src={data.image} alt="" width={725} height={432} />
        <div>
          <h3 className="text-4xl font-semibold text-th-gray-400 relative after:content-[''] after:absolute after:w-[120px] after:h-[3px] after:bg-th-red-500 after:-bottom-3 after:left-0">
            {t("core_values")}
          </h3>
          <div className="mt-10">
            <h4 className="text-th-gray-400 font-semibold text-[25px] mb-6">
              {data.center_customer.title}
            </h4>
            <p className="text-base font-medium text-th-gray-300">
              {data.center_customer.content}
            </p>
            <h4 className="text-th-gray-400 font-semibold text-[25px] mb-6 mt-10">
              {data.kindness.title}
            </h4>
            <div>
              {data.kindness.content.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 mb-4 last:mb-0"
                >
                  <Image src={ChevronRight} alt="" width={24} height={24} />
                  <div className="text-th-gray-500 text-base font-medium">
                    {item}
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
