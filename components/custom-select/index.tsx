import { ChangeEvent, ChangeEventHandler, ReactNode } from "react";
import { FC } from "react";
import styles from "@components/custom-select/style.module.scss";

type CustomSelectProps = {
  children?: ReactNode;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const CustomSelect: FC<CustomSelectProps> = ({ children, value, onChange }) => {
  return (
    <select
      value={value}
      className={styles.customSelect}
      onChange={(e) => onChange && onChange(e)}
    >
      {children}
    </select>
  );
};

export default CustomSelect;
