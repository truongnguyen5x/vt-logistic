import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

import ArrowRight from "@assets/images/icons/arrow_right.svg";
import Link from "next/link";

type Props = {
  data: {
    contact: {
      image: string;
      title: string;
      content: string;
      link: string;
    };
    milestones: {
      image: string;
      title: string;
      content: string;
      link: string;
    };
  };
  className?: string;
};

const MoreInfo: FC<Props> = ({ data, className = "" }) => {
  const t = useTranslations("introduce");

  return (
    <section className={`container mx-auto ${className}`}>
      <div className="flex items-center gap-[50px]">
        <Link href={data.contact.link} className="relative cursor-pointer">
          <div>
            <Image src={data.contact.image} alt="" width={740} height={480} />
            <div className="bg-gradient-overlay absolute top-0 left-0 w-full h-full"></div>
          </div>
          <div className="absolute bottom-6 z-10">
            <h4 className="text-white text-[25px] w-fit font-bold py-2 pl-8 pr-4 bg-th-red-500 rounded-tr-2xl leading-[26px]">
              {data.contact.title}
            </h4>
            <p className="mt-4 text-white font-medium text-base px-8">
              {data.contact.content}
            </p>
            <div className="flex gap-2 items-center justify-end mt-2 mx-8 text-white">
              {t("read_more")}
              <svg
                width="20"
                height="20"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8501 33.2L25.7168 22.3333C27.0001 21.05 27.0001 18.95 25.7168 17.6667L14.8501 6.79999"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </Link>
        <Link href={data.milestones.link} className="relative cursor-pointer">
          <div>
            <Image src={data.milestones.image} alt="" width={740} height={480} />
            <div className="bg-gradient-overlay absolute top-0 left-0 w-full h-full"></div>
          </div>
          <div className="absolute bottom-6 z-10">
            <h4 className="text-white text-[25px] w-fit font-bold py-2 pl-8 pr-4 bg-th-red-500 rounded-tr-2xl leading-[26px]">
              {data.milestones.title}
            </h4>
            <p className="mt-4 text-white font-medium text-base px-8">
              {data.milestones.content}
            </p>
            <div className="flex gap-2 items-center justify-end mt-2 mx-8 text-white">
              {t("read_more")}
              <svg
                width="20"
                height="20"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8501 33.2L25.7168 22.3333C27.0001 21.05 27.0001 18.95 25.7168 17.6667L14.8501 6.79999"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </Link>
        {/* <div className="relative">
          <div className="absolute top-0 left-0">
            <Image src={data.contact.image} alt="" width={740} height={480} />
            <div className=" bg-gradient-overlay"></div>
          </div>
          <div className="relative flex flex-col justify-end min-h-[430px]">
            <h4>{data.contact.title}</h4>
            <p>{data.contact.content}</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0">
            <Image src={data.milestones.image} alt="" width={740} height={480} />
          </div>
          <div>
            <h4>{data.contact.title}</h4>
            <p>{data.contact.content}</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default MoreInfo;
