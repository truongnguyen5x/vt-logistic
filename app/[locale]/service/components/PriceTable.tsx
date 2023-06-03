"use client";
import { getPrefixImageUrl } from "@ultility/index";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styles from "../style.module.scss";
import clsx from "clsx";

interface Props {
  image?: string;
}

const PriceTable: FC<Props> = ({ image }) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    if (isMounted) {
      if (window.location.hash) {
        const priceTableElement = document.getElementById(
          window.location.hash.substring(1)
        );
        if (priceTableElement) {
          priceTableElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      setMounted(true);
    }
  }, [isMounted]);

  return (
    <div className={clsx("mb-20 overflow-x-auto", styles.priceTable)}>
      <Image
        className="min-w-[1500px]"
        width={1600}
        height={700}
        src={getPrefixImageUrl(image)}
        alt=""
      />
    </div>
  );
};

export default PriceTable;
