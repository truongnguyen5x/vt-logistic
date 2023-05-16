import { FC } from "react";
import styles from "@app/styles.module.scss";

export type IFormRegister = {
  title: string;
  placeholder: string;
  register_txt: string;
};

interface FormRegisterProps {
  assets: IFormRegister;
}

const FormRegister: FC<FormRegisterProps> = ({ assets }) => {
  return <div className={styles.formWp}></div>;
};

export default FormRegister;
