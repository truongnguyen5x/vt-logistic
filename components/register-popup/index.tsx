"use client";

import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import BgPopup from "@assets/images/bg_popup.png";
import CustomAutocomplete from "@components/CustomAutocomplete";
import { ICountry, IProvince } from "@type/location";
import { fetchFromClient } from "@api/client";
import { useParams } from "next/navigation";
import { ILocale } from "@configs/i18n";
import { SERVICE_TRANSPORT } from "@ultility/constant";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

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

const schema = yup.object({
  fullName: yup.string().required("Vui lòng nhập"),
  phoneNumber: yup.string().required("Vui lòng nhập"),
  email: yup.string().email("Vui lòng nhập email"),
  service: yup.string().required("Vui lòng nhập"),
  from: yup.string().required("Vui lòng nhập"),
  to: yup.string().required("Vui lòng nhập"),
});

const ResgisterPopup: FC<Props> = ({
  textBtn = "",
  label,
  placeholder,
  title,
  description,
}) => {
  const params = useParams();

  const [open, setOpen] = useState<boolean>(false);

  const [listCountry, setListCountry] = useState<ICountry[]>([]);
  const [listProvince, setListProvince] = useState<IProvince[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    fetchFromClient<ICountry[]>("country", params.locale as ILocale).then(
      (res) => {
        setListCountry(res);
      }
    );
    fetchFromClient<IProvince[]>("province", params.locale as ILocale).then(
      (res) => {
        setListProvince(res);
      }
    );
  }, []);

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

  const onSubmit = (data: any) => {
    console.log(data);
  };

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
        <div className="fixed inset-0 z-[9999] bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="flex flex-col items-center justify-center 2xl:h-full mx-auto">
            <div
              className="relative py-16 px-44 shadow-lg rounded-md bg-white"
              ref={ref}
            >
              <Image
                src={BgPopup}
                alt=""
                width={900}
                height={593}
                className="absolute top-44 left-16"
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
              <div className="relative max-w-6xl">
                <h3 className="text-xl text-th-red-500 text-center font-bold max-w-[500px] mx-auto">
                  {title}
                </h3>
                <p className="mt-4 text-th-gray-400 text-base text-center">
                  {description}
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <label className="text-th-gray-320 text-sm font-semibold mb-1.5 relative after:absolute after:-right-2 after:content-['*'] after:text-th-red-500">
                        {label.fullname}
                      </label>
                      <Controller
                        name="fullName"
                        control={control}
                        render={({ field }) => (
                          <input
                            className={`bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full ${
                              !!errors.fullName?.message
                                ? "border border-th-red-500"
                                : ""
                            }`}
                            placeholder={placeholder.fullname}
                            {...field}
                          />
                        )}
                      />
                      {!!errors.fullName && !!errors.fullName?.message && (
                        <p className="text-sm text-th-red-500 mt-1">
                          {errors.fullName?.message.toString()}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-th-gray-320 text-sm font-semibold mb-1.5 relative after:absolute after:-right-2 after:content-['*'] after:text-th-red-500">
                        {label.phone_number}
                      </label>
                      <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field }) => (
                          <input
                            className={`bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full ${
                              !!errors.phoneNumber?.message
                                ? "border border-th-red-500"
                                : ""
                            }`}
                            placeholder={placeholder.phone_number}
                            {...field}
                          />
                        )}
                      />
                      {!!errors.phoneNumber &&
                        !!errors.phoneNumber?.message && (
                          <p className="text-sm text-th-red-500 mt-1">
                            {errors.phoneNumber?.message.toString()}
                          </p>
                        )}
                    </div>
                    <div>
                      <label className="text-th-gray-320 text-sm font-semibold mb-1.5">
                        {label.email}
                      </label>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <input
                            className={`bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full ${
                              !!errors.email?.message
                                ? "border border-th-red-500"
                                : ""
                            }`}
                            placeholder={placeholder.email}
                            {...field}
                          />
                        )}
                      />
                      {!!errors.email && !!errors.email?.message && (
                        <p className="text-sm text-th-red-500 mt-1">
                          {errors.email?.message.toString()}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-th-gray-320 text-sm font-semibold mb-1.5 relative after:absolute after:-right-2 after:content-['*'] after:text-th-red-500">
                        {label.service}
                      </label>
                      <CustomAutocomplete
                        classNamePrefix={
                          !!errors.service?.message
                            ? "custom-select-register-error"
                            : "custom-select-register"
                        }
                        value={getValues("service")}
                        onChange={(e) => {
                          setValue("service", e, {
                            shouldValidate: true,
                            shouldDirty: true,
                          });
                          setValue("from", null, {
                            shouldValidate: true,
                            shouldDirty: true,
                          });
                          setValue("to", null, {
                            shouldValidate: true,
                            shouldDirty: true,
                          });
                        }}
                        options={[
                          { value: "0", label: "Express" },
                          { value: "1", label: "Fowarding" },
                          { value: "2", label: "Vận tải" },
                        ]}
                      />
                      {!!errors.service && !!errors.service?.message && (
                        <p className="text-sm text-th-red-500 mt-1">
                          {errors.service?.message.toString()}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-th-gray-320 text-sm font-semibold mb-1.5 relative after:absolute after:-right-2 after:content-['*'] after:text-th-red-500">
                        {label.from}
                      </label>
                      <CustomAutocomplete
                        classNamePrefix={
                          !!errors.from?.message
                            ? "custom-select-register-error"
                            : "custom-select-register"
                        }
                        value={getValues("from")}
                        onChange={(e) =>
                          setValue("from", e, {
                            shouldValidate: true,
                            shouldDirty: true,
                          })
                        }
                        options={
                          Number(getValues("service")) ==
                          SERVICE_TRANSPORT.TRANSPORT
                            ? listProvince.map((i) => ({
                                value: i.id,
                                label: i.name,
                              }))
                            : listCountry.map((i) => ({
                                value: i.id,
                                label: i.name,
                              }))
                        }
                      />
                      {!!errors.from && !!errors.from?.message && (
                        <p className="text-sm text-th-red-500 mt-1">
                          {errors.from?.message.toString()}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-th-gray-320 text-sm font-semibold mb-1.5 relative after:absolute after:-right-2 after:content-['*'] after:text-th-red-500">
                        {label.to}
                      </label>
                      <CustomAutocomplete
                        classNamePrefix={
                          !!errors.to?.message
                            ? "custom-select-register-error"
                            : "custom-select-register"
                        }
                        value={getValues("to")}
                        onChange={(e) =>
                          setValue("to", e, {
                            shouldValidate: true,
                            shouldDirty: true,
                          })
                        }
                        options={
                          Number(getValues("service")) ==
                          SERVICE_TRANSPORT.TRANSPORT
                            ? listProvince.map((i) => ({
                                value: i.id,
                                label: i.name,
                              }))
                            : listCountry.map((i) => ({
                                value: i.id,
                                label: i.name,
                              }))
                        }
                      />
                      {!!errors.to && !!errors.to?.message && (
                        <p className="text-sm text-th-red-500 mt-1">
                          {errors.to?.message.toString()}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-8">
                    <label className="text-th-gray-320 text-sm font-semibold mb-1.5">
                      {label.note}
                    </label>
                    <Controller
                      name="note"
                      control={control}
                      render={({ field }) => (
                        <textarea
                          className="bg-th-gray-220 focus-visible:outline-none px-6 py-4 w-full"
                          rows={4}
                          placeholder={placeholder.note}
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-red mt-8 flex justify-center items-center mx-auto"
                  >
                    {label.button}
                  </button>
                </form>
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
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log(1);
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