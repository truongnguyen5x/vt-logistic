"use client";

import { ApolloWrapper } from "@graphql/client";
import { useMutation } from "@apollo/client";
import { ILocale } from "@type/locale";
import {
  CreateCustomerContactDocument,
  CustomerContactInput,
} from "@generated/graphql";
import { yupResolver } from "@hookform/resolvers/yup";
import { getLanguageForApi } from "@ultility/index";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as yup from "yup";
import clsx from "clsx";

type PropsContent = {
  title: {
    title: string;
    fullname: string;
    phone_number: string;
    email: string;
    address: string;
    note: string;
    text_button: string;
  };
  placeholder: {
    title: string;
    fullname: string;
    phone_number: string;
    email: string;
    address: string;
    note: string;
  };
  successTxt: string;
  locale: ILocale;
};

const FormContainer: FC<PropsContent> = ({
  title,
  placeholder,
  locale,
  successTxt,
}) => {
  return (
    <ApolloWrapper>
      <FormContent
        title={title}
        placeholder={placeholder}
        locale={locale}
        successTxt={successTxt}
      />
    </ApolloWrapper>
  );
};

export default FormContainer;

const schema = yup.object({
  title: yup.string().required("Vui lòng nhập"),
  fullname: yup.string().required("Vui lòng nhập"),
  phone_number: yup.string().required("Vui lòng nhập"),
  content: yup.string().required("Vui lòng nhập"),
  email: yup.string().email("Nhập Email"),
});

const FormContent: FC<PropsContent> = ({
  title,
  placeholder,
  locale,
  successTxt,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [create] = useMutation(CreateCustomerContactDocument, {
    onCompleted(data, clientOptions) {
      // console.log(data);
      reset();
      toast.success(successTxt);
    },
    onError(error, clientOptions) {
      console.log(error);
    },
  });
  const onSubmit = (data: CustomerContactInput) => {
    create({
      variables: { data, locale: getLanguageForApi(locale) },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row gap-[30px] items-baseline mb-8">
        <div className="animation w-full">
          <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
            {title.title}
          </div>
          <Controller
            name="title"
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <input
                className={clsx(
                  "bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full",
                  { "border border-th-red-500": !!errors.title?.message }
                )}
                placeholder={placeholder.title}
                {...field}
              />
            )}
          />
          {!!errors.title && !!errors.title?.message && (
            <p className="text-sm text-th-red-500 mt-1">
              {errors.title?.message.toString()}
            </p>
          )}
        </div>
        <div className="animation w-full">
          <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
            {title.fullname}
          </div>
          <Controller
            name="fullname"
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <input
                className={clsx(
                  "bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full",
                  { "border border-th-red-500": !!errors.title?.message }
                )}
                placeholder={placeholder.fullname}
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
      </div>
      <div className="flex flex-col md:flex-row gap-[30px] items-baseline mb-8">
        <div className="animation w-full">
          <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
            {title.phone_number}
          </div>
          <Controller
            name="phone_number"
            defaultValue={""}
            control={control}
            render={({ field }) => (
              <input
                className={clsx(
                  "bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full",
                  { "border border-th-red-500": !!errors.title?.message }
                )}
                placeholder={placeholder.phone_number}
                {...field}
              />
            )}
          />
          {!!errors.phone_number && !!errors.phone_number?.message && (
            <p className="text-sm text-th-red-500 mt-1">
              {errors.phone_number?.message.toString()}
            </p>
          )}
        </div>
        <div className="animation w-full">
          <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
            {title.email}
          </div>

          <Controller
            name="email"
            defaultValue={""}
            control={control}
            render={({ field }) => (
              <input
                className={clsx(
                  "bg-th-gray-220 h-14 focus-visible:outline-none px-6 py-4 w-full",
                  { "border border-th-red-500": !!errors.title?.message }
                )}
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
      </div>
      <div className="mb-8 animation">
        <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
          {title.address}
        </div>
        <Controller
          name="address"
          defaultValue={""}
          control={control}
          render={({ field }) => (
            <input
              className={clsx(
                "bg-th-gray-220 h-14 w-full focus-visible:outline-none px-6 py-4 xl:w-[685px]",
                { "border border-th-red-500": !!errors.address?.message }
              )}
              placeholder={placeholder.address}
              {...field}
            />
          )}
        />
        {!!errors.address && !!errors.address?.message && (
          <p className="text-sm text-th-red-500 mt-1">
            {errors.address?.message.toString()}
          </p>
        )}
      </div>
      <div className="mb-8 animation">
        <div className="text-th-gray-320 text-sm font-semibold mb-1.5">
          {title.note}
        </div>
        <Controller
          name="content"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <textarea
              className={clsx(
                "bg-th-gray-220 focus-visible:outline-none px-6 py-4 w-full",
                { "border border-th-red-500": !!errors.content?.message }
              )}
              rows={4}
              placeholder={placeholder.note}
              {...field}
            />
          )}
        />
        {!!errors.content && !!errors.content?.message && (
          <p className="text-sm text-th-red-500 mt-1">
            {errors.content?.message.toString()}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="bg-th-red-500 text-white text-2xl font-medium text-center w-full rounded-[50px] py-5 mb-10 xl:mb-32"
      >
        {title.text_button}
      </button>
    </form>
  );
};
