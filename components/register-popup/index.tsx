"use client";

import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import BgPopup from "@assets/images/bg_popup.jpg";

type Props = {
  textBtn?: string;
  title: string;
  description: string;
  label: {
    fullname: string;
    phone_number: string;
    email: string;
    service: string;
    from: string;
    to: string;
    weight: string;
    note: string;
    button: string;
    required: string;
  };
  placeholder: {
    fullname: string;
    phone_number: string;
    email: string;
    from: string;
    to: string;
    weight: string;
    note: string;
  };
};

const ResgisterPopup: FC<Props> = ({
  textBtn = "",
  label,
  placeholder,
  title,
  description,
}) => {
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
        className="btn-red animation"
        data-animation-delay="0.6s"
      >
        {textBtn}
      </button>
      {open && (
        <div className="fixed inset-0 z-10 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="flex flex-col items-center justify-center 2xl:h-full mx-auto">
            <div
              className="relative py-[50px] w-auto 2xl:w-4/5 shadow-lg rounded-md bg-white"
              ref={ref}
            >
              <Image
                src={BgPopup}
                alt=""
                className="absolute top-0 left-0 w-full h-full"
              />
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full bg-th-gray-300"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="white"
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  ></path>
                </svg>
              </button>
              <div className="relative bg-white py-[50px] px-20 max-w-6xl mx-auto rounded-lg">
                <h3 className="text-xl text-th-red-500 text-center font-bold max-w-[500px] mx-auto">
                  {title}
                </h3>
                <p className="mt-4 text-th-gray-400 text-base text-center">
                  {description}
                </p>
                <div className="mt-8">
                  <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                    <div>
                      <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
                        {label.fullname}
                      </div>
                      <input
                        className="bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full"
                        placeholder={placeholder.fullname}
                      />
                    </div>
                    <div>
                      <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
                        {label.phone_number}
                      </div>
                      <input
                        className="bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full"
                        placeholder={placeholder.phone_number}
                      />
                    </div>
                    <div>
                      <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
                        {label.email}
                      </div>
                      <input
                        className="bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full"
                        placeholder={placeholder.email}
                      />
                    </div>
                    <div>
                      <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
                        {label.service}
                      </div>
                      <input className="bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full" />
                    </div>
                    <div>
                      <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
                        {label.from}
                      </div>
                      <input
                        className="bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full"
                        placeholder={placeholder.from}
                      />
                    </div>
                    <div>
                      <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
                        {label.to}
                      </div>
                      <input
                        className="bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full"
                        placeholder={placeholder.to}
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
                      {label.weight}
                    </div>
                    <input
                      className="bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full"
                      placeholder={placeholder.weight}
                    />
                  </div>
                  <div className="mt-6">
                    <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
                      {label.note}
                    </div>
                    <input
                      className="bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full"
                      placeholder={placeholder.note}
                    />
                  </div>
                  <button className="btn-red mt-6 flex justify-center items-center mx-auto">
                    {label.button}
                  </button>
                  <p className="text-center text-th-red-500 mt-6 text-base">
                    {label.required}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResgisterPopup;

function useOutsideClose(ref: any, onClose: () => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }
    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose, ref]);
}
