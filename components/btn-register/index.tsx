"use client";

import { FC } from "react";

type Props = {
  text: string;
  className?: string;
};

const ButtonRegister: FC<Props> = ({ text, className = "" }) => {
  const handleRegister = () => {
    if (!!document.getElementById("js-register-input")) {
      document.getElementById("js-register-input")?.focus();
      document.getElementById("js-register-input")?.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
  };

  return (
    <button
      className={`animation btn-red z-10 ${className}`}
      onClick={handleRegister}
    >
      {text}
    </button>
  );
};

export default ButtonRegister;
