import { FC } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import RightImg from "@assets/images/icons/arrow_right_2.svg";
import { useRouter } from "next-intl/client";
import Link from "next-intl/link";

interface MoreServiceProps {
  services: Array<{ txt: string; url: string; img: string }>;
  more: string;
}

const MoreService: FC<MoreServiceProps> = ({ services, more }) => {
  return (
    <div className="grid grid-cols-3 mt-14 gap-12 mb-24">
      {services.map((service, idx) => (
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
              <Link href={service.url}>
                <button className="btn-red absolute -bottom-7 right-0">
                  {more}
                  <Image src={RightImg} alt="next" width={20} height={20} />
                </button>
              </Link>
            </div>
            <div className={styles.serviceItemTxt}>
              <p>{service.txt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreService;
