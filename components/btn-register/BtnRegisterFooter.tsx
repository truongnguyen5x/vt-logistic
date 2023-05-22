"use client";

import { useForm, Controller } from "react-hook-form";
import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";
import toast, { Toaster } from "react-hot-toast";

interface ButtonRegisterFooterProps {
  placeholder: string;
  btn: string;
  errorTxt: string;
  successTxt: string;
}

const registerSchema = yup.object({
  email: yup.string().email().required(),
});

const ButtonRegisterFooter: FC<ButtonRegisterFooterProps> = ({
  placeholder,
  btn,
  errorTxt,
  successTxt,
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

  const onSubmit = (data: { email: string }) => {
    toast.success(successTxt);
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
            type="text"
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
