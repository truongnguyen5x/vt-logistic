"use client";

import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import BgPopup from "@assets/images/background/bg_popup.png";
import styles from "./style.module.scss";
import useOutsideClose from "@hooks/use-click-outside";
import { getPrefixImageUrl } from "@ultility/index";
import clsx from "clsx";

type Props = {
  buttonTxt: string;
  title: string;
  priceImage: string;
};

const PricePopup: FC<Props> = ({ buttonTxt, title, priceImage }) => {
  const [open, setOpen] = useState<boolean>(false);

  const ref = useRef(null);

  const handleOpenPopup = () => {
    setOpen(true);
    document.body.style.overflowY = "hidden";
  };

  const handleClose = () => {
    setOpen(false);
    document.body.style.overflowY = "auto";
  };

  useOutsideClose(ref, handleClose);

  return (
    <div>
      <button
        onClick={handleOpenPopup}
        className="btn-gray-outlined animation max-md:w-full max-xl:!px-3"
        data-animtion-delay="0.6s"
      >
        {buttonTxt}
      </button>
      {open && (
        <div className="fixed inset-0 z-[9999] bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ">
          <div className="flex flex-col items-center justify-center 2xl:h-full mx-auto">
            <div
              className="relative m-3 px-4 py-6 lg:py-16 md:px-10 lg:px-16 shadow-lg rounded-md bg-white"
              ref={ref}
            >
              <button
                onClick={handleClose}
                className={clsx(
                  "absolute flex items-center justify-center rounded-full bg-th-gray-300",
                  "top-2 right-2 lg:top-4 lg:right-4",
                  "w-4 h-4 lg:w-7 lg:h-7"
                )}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="white"
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  ></path>
                </svg>
              </button>
              <div className="relative max-w-6xl">
                <h3 className="text-xl text-th-red-500 text-center font-bold max-w-[500px] mx-auto">
                  {title}
                </h3>
                <div className={styles.priceWp}>
                  <div className="min-w-[1500px]">
                    <Image
                      className=""
                      src={getPrefixImageUrl(priceImage)}
                      width={1500}
                      height={600}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PricePopup;
