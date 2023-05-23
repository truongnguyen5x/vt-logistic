import { FC, Fragment } from "react";
import { ILookupContent } from "..";
import CheckImg from "@assets/images/icons/check.svg";
import Image from "next/image";
import CallImg from "@assets/images/icons/calling.svg";
import styles from "@app/styles.module.scss";

interface ServiceAvailableProps {
  content: ILookupContent;
}

const ServiceAvailable: FC<ServiceAvailableProps> = ({ content }) => {
  return (
    <Fragment>
      <div className="flex flex-col items-center mt-8">
        <Image src={CheckImg} width={82} height={82} alt="check" />
        <p className="text-th-gray-300 font-semibold text-2xl uppercase mt-4">
          {content.service_available}
        </p>
        <p className="text-xl font-medium text-th-gray-300 mt-4 whitespace-pre-line text-center mb-8">
          {content.service_available_des}
        </p>
        <div className="flex flex-col">
          {content.contacts.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 justify-start my-3 items-center"
            >
              <p className="w-40 text-2xl font-semibold text-th-gray-300">
                {item.name}
              </p>
              <a href={`tel:${item.phone}`} className={styles.boxContact}>
                <Image src={CallImg} width={24} height={24} alt="calling" />
                <p className="text-th-gray-300 font-medium text-2xl">
                  {item.phone}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default ServiceAvailable;
