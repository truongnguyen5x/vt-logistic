import { ReactNode } from "react";
import { FC } from "react";
import styles from "@components/custom-select/style.module.scss";

type CustomSelectProps = {
  children?: ReactNode;
};

const CustomSelect: FC<CustomSelectProps> = ({ children }) => {
  return <select className={styles.customSelect}>{children}</select>;
};

export default CustomSelect;
