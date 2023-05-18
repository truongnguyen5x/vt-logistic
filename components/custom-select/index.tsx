import {
  ChangeEvent,
  ChangeEventHandler,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { FC } from "react";
import styles from "@components/custom-select/style.module.scss";
import Select, { SingleValue } from "react-select";

type IOption = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  children?: ReactNode;
  value?: string;
  onChange?: (newValue: string) => void;
  options: IOption[];
};

const CustomSelect: FC<CustomSelectProps> = ({ options, value, onChange }) => {
  const [_value, setValue] = useState<IOption | undefined>(undefined);

  useEffect(() => {
    if (value && options.length > 0) {
      const temp = options.find((i) => i.value == value);
      setValue(temp);
    }
  }, [value, options]);

  return (
    <Select
      classNamePrefix={"custom-select"}
      value={_value}
      isSearchable
      isMulti={false}
      options={options}
      onChange={(e) => e && onChange && onChange(e.value)}
    />
  );
};

export default CustomSelect;
