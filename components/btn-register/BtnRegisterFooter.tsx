"use client";

import { useForm, Controller } from "react-hook-form";
import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";
import toast, { Toaster } from "react-hot-toast";
import { ApolloWrapper } from "@graphql/client";
import { useMutation } from "@apollo/client";
import { CreateCustomerContactDocument } from "@generated/graphql";
import { getLanguageForApi } from "@ultility/index";
import { ILocale } from "@type/locale";

interface ButtonRegisterFooterProps {
  placeholder: string;
  btn: string;
  errorTxt: string;
  successTxt: string;
  locale: ILocale;
}

const registerSchema = yup.object({
  email: yup.string().email().required(),
});

const ButtonRegisterFooter: FC<ButtonRegisterFooterProps> = ({
  placeholder,
  btn,
  errorTxt,
  successTxt,
  locale,
}) => {
  return (
    <ApolloWrapper>
      <RegisterFooter
        locale={locale}
        placeholder={placeholder}
        btn={btn}
        errorTxt={errorTxt}
        successTxt={successTxt}
      />
    </ApolloWrapper>
  );
};

const RegisterFooter: FC<ButtonRegisterFooterProps> = ({
  placeholder,
  btn,
  errorTxt,
  successTxt,
  locale,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "all",
    defaultValues: {
      email: "",
    },
  });

  const [create] = useMutation(CreateCustomerContactDocument, {
    onCompleted(data, clientOptions) {
      // console.log(data);
      toast.success(successTxt);
    },
    onError(error, clientOptions) {
      console.log(error);
    },
  });

  const onSubmit = (data: { email: string }) => {
    create({ variables: { data, locale: getLanguageForApi(locale) } });
  };

  return (
    <div
      className={clsx("footer-input-register", {
        "footer-email-error": !!errors.email,
      })}
    >
      <Controller
        name="email"
        control={control}
        render={({ field: { value, onChange } }) => (
          <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type="email"
            id="js-register-input"
          />
        )}
      />
      {errors.email && <p>*{errorTxt}</p>}
      <button onClick={handleSubmit(onSubmit)} disabled={!!errors.email}>
        {btn}
      </button>
    </div>
  );
};

export default ButtonRegisterFooter;
