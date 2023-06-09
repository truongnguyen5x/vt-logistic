"use client";

import Image from "next/image";
import {
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import BgPopup from "@assets/images/background/bg_popup.png";
import CustomAutocomplete from "@components/CustomAutocomplete";

import { useParams } from "next/navigation";
import { ILocale } from "@type/locale";
import { SERVICE_TRANSPORT } from "@ultility/constant";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { getLanguageForApi } from "@ultility/index";
import {
  getCountryQueryString,
  getProvinceQueryString,
} from "@graphql/location";
import { gql } from "@generated/gql";

import { ApolloWrapper } from "@graphql/client";
import {
  Country,
  CountryEntity,
  Maybe,
  Province,
  ProvinceEntity,
} from "@generated/graphql";

import { useMutation } from "@apollo/client";
import { CreateOrderServiceDocument } from "@generated/graphql";
import { toast } from "react-hot-toast";
import useOutsideClose from "@hooks/use-click-outside";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { IService } from "@type/common";

type Props = {
  locale: ILocale;
  type?: IService;
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

const schema = ({ required, email }: { required: string; email: string }) => {
  return yup.object({
    fullname: yup.string().required(required),
    phone_number: yup.string().required(required),
    email: yup.string().email(email),
    service: yup.string().required(required),
    from: yup.string().required(required),
    to: yup.string().required(required),
  });
};

const ResgisterPopup: FC<Props> = ({
  locale,
  open,
  setOpen,
  type = "trucking_domestic",
}) => {
  const params = useParams();
  const t = useTranslations("register_popup");
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(
      schema({ required: t("requiredTxt"), email: t("emailTxt") })
    ),
  });

  const { data: dataCountry } = useSuspenseQuery(gql(getCountryQueryString), {
    variables: { locale: getLanguageForApi(params.locale as ILocale) },
  });
  const { data: dataProvince } = useSuspenseQuery(gql(getProvinceQueryString), {
    variables: { locale: getLanguageForApi(params.locale as ILocale) },
  });

  const listCountry =
    dataCountry.countries?.data.map((i: CountryEntity) => i.attributes) || [];
  const listProvince =
    dataProvince.provinces?.data.map((i: ProvinceEntity) => i.attributes) || [];

  const ref = useRef(null);

  const service = watch("service");

  const handleOpenPopup = () => {
    setOpenPopup(true);
    document.body.style.overflowY = "hidden";
  };

  const handleClose = () => {
    setOpen ? setOpen(false) : setOpenPopup(false);
    reset({
      fullname: "",
      phone_number: "",
      email: "",
      service: "",
      from: "",
      to: "",
      note: "",
      weight: "",
    });
    document.body.style.overflowY = "auto";
  };

  const [mutation] = useMutation(CreateOrderServiceDocument, {
    onCompleted(data, clientOptions) {
      toast.success(t("success") || "");
      reset({
        fullname: "",
        phone_number: "",
        email: "",
        service: "",
        from: "",
        to: "",
        note: "",
        weight: "",
      });
      handleClose();
    },
  });

  useOutsideClose(ref, handleClose);

  const onSubmit = (data: any) => {
    data.service_type = type;
    if (data.weight) {
      data.weight = parseFloat(data.weight);
    }
    mutation({ variables: { data } });
  };

  return (
    <Fragment>
      {!setOpen && (
        <button
          onClick={handleOpenPopup}
          className="btn-red animation max-md:w-full"
          data-animation-delay="0.6s"
        >
          {t("create_order")}
        </button>
      )}
      {(setOpen ? open : openPopup) && (
        <div className="fixed inset-0 z-[9999] bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="flex flex-col items-center justify-center 2xl:h-full mx-auto">
            <div
              className="relative m-3 px-4 py-6 lg:py-16 lg:px-44 shadow-lg rounded-md bg-white"
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
                  {t("title")}
                </h3>
                <p className="mt-4 text-th-gray-400 text-base text-center">
                  {t("description")}
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="text-th-gray-320 text-sm font-semibold mb-1.5 relative after:absolute after:-right-2 after:content-['*'] after:text-th-red-500">
                        {t("fullname")}
                      </label>
                      <Controller
                        name="fullname"
                        control={control}
                        defaultValue={""}
                        render={({ field }) => (
                          <input
                            className={clsx(
                              "bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full",
                              {
                                "border border-th-red-500":
                                  !!errors.fullname?.message,
                              }
                            )}
                            placeholder={t("placeholder.fullname")}
                            {...field}
                          />
                        )}
                      />
                      {!!errors.fullname && !!errors.fullname?.message && (
                        <p className="text-sm text-th-red-500 mt-1">
                          {errors.fullname?.message.toString()}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-th-gray-320 text-sm font-semibold mb-1.5 relative after:absolute after:-right-2 after:content-['*'] after:text-th-red-500">
                        {t("phone_number")}
                      </label>
                      <Controller
                        name="phone_number"
                        defaultValue={""}
                        control={control}
                        render={({ field }) => (
                          <input
                            className={clsx(
                              "bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full",
                              {
                                "border border-th-red-500":
                                  !!errors.fullname?.message,
                              }
                            )}
                            placeholder={t("placeholder.phone_number")}
                            {...field}
                          />
                        )}
                      />
                      {!!errors.phone_number &&
                        !!errors.phone_number?.message && (
                          <p className="text-sm text-th-red-500 mt-1">
                            {errors.phone_number?.message.toString()}
                          </p>
                        )}
                    </div>
                    <div>
                      <label className="text-th-gray-320 text-sm font-semibold mb-1.5">
                        {t("email")}
                      </label>
                      <Controller
                        name="email"
                        defaultValue={""}
                        control={control}
                        render={({ field }) => (
                          <input
                            className={clsx(
                              "bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full",
                              {
                                "border border-th-red-500":
                                  !!errors.fullname?.message,
                              }
                            )}
                            placeholder={t("placeholder.email")}
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
                        {t("service")}
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
                        placeholder={t("placeholder.select")}
                        options={[
                          { value: "Express", label: "Express" },
                          { value: "Fowarding", label: "Fowarding" },
                          { value: "Vận tải", label: "Vận tải" },
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
                        {t("from")}
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
                        placeholder={t("placeholder.select")}
                        options={
                          service == SERVICE_TRANSPORT.TRANSPORT
                            ? listProvince?.map(
                                (province: Maybe<Province> | undefined) => ({
                                  value: province?.name || "",
                                  label: province?.fullname || "",
                                })
                              )
                            : listCountry?.map(
                                (country: Maybe<Country> | undefined) => ({
                                  value: country?.name || "",
                                  label: country?.fullname || "",
                                })
                              )
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
                        {t("to")}
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
                          service == SERVICE_TRANSPORT.TRANSPORT
                            ? listProvince?.map(
                                (province: Maybe<Province> | undefined) => ({
                                  value: province?.name || "",
                                  label: province?.fullname || "",
                                })
                              )
                            : listCountry?.map(
                                (country: Maybe<Country> | undefined) => ({
                                  value: country?.name || "",
                                  label: country?.fullname || "",
                                })
                              )
                        }
                      />
                      {!!errors.to && !!errors.to?.message && (
                        <p className="text-sm text-th-red-500 mt-1">
                          {errors.to?.message.toString()}
                        </p>
                      )}
                    </div>
                  </div>
                  {type != "trucking_domestic" &&
                    type != "trucking_international" && (
                      <div className="mt-8">
                        <label className="text-th-gray-320 text-sm font-semibold mb-1.5">
                          {t("weight")}
                        </label>
                        <Controller
                          name="weight"
                          control={control}
                          defaultValue={""}
                          render={({ field }) => (
                            <input
                              type="number"
                              className="bg-th-gray-220 focus-visible:outline-none px-6 py-4 w-full"
                              {...field}
                            />
                          )}
                        />
                      </div>
                    )}
                  <div className="mt-8">
                    <label className="text-th-gray-320 text-sm font-semibold mb-1.5">
                      {t("note")}
                    </label>
                    <Controller
                      name="note"
                      control={control}
                      defaultValue={""}
                      render={({ field }) => (
                        <textarea
                          className="bg-th-gray-220 focus-visible:outline-none px-6 py-4 w-full"
                          rows={4}
                          placeholder={t("placeholder.note")}
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-red mt-8 flex justify-center items-center mx-auto"
                  >
                    {t("button")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default function ResgisterPopupWrap({
  locale,
  type,
  open,
  setOpen,
}: Props) {
  return (
    <ApolloWrapper>
      <ResgisterPopup
        locale={locale}
        type={type}
        open={open}
        setOpen={setOpen}
      />
    </ApolloWrapper>
  );
}
