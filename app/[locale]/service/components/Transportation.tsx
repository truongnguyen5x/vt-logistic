import styles from "@app/service/style.module.scss";
import Image from "next/image";
import { FC } from "react";
import RightImg from "@assets/images/icons/arrow_right_2.svg";

interface TransportationProps {
  title: string;
  more: string;
  description: string;
  listService: Array<{ txt: string; url: string; img: string }>;
}

const Transportation: FC<TransportationProps> = ({
  title,
  more,
  description,
  listService,
}) => {
  return (
    <div className="container mx-auto">
      <div className="section-name mb-9 mt-12 animation">{title}</div>
      <p
        className="text-base text-th-gray-300 font-medium text-center whitespace-pre-line animation"
        data-animation-delay="0.3s"
      >
        {description}
      </p>
      <div className="grid grid-cols-3 mt-14 gap-12 mb-24">
        {listService.map((service, idx) => (
          <div
            key={idx}
            className={[styles.serviceItem, "animation"].join(" ")}
            data-animation-delay="0.4s"
          >
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div className={styles.serviceItemImg}>
                <Image
                  src={service.img}
                  className="w-full object-cover"
                  width={474}
                  height={520}
                  alt=""
                />
                <button className="btn-red absolute -bottom-7 right-0">
                  {more}
                  <Image src={RightImg} alt="next" width={20} height={20} />
                </button>
              </div>
              <div className={styles.serviceItemTxt}>
                <p>{service.txt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transportation;
