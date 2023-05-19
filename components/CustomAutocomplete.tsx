import {
  ChangeEvent,
  ChangeEventHandler,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { FC } from "react";
import Select, { SingleValue, components } from "react-select";
import ArrowDownImg from "@assets/images/icons/arrow_down.svg";
import Image from "next/image";

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

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <Image src={ArrowDownImg} width={24} height={24} alt="" />
    </components.DropdownIndicator>
  );
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
      components={{
        DropdownIndicator: DropdownIndicator,
      }}
      options={options}
      menuPortalTarget={document.querySelector("body")}
      onChange={(e) => e && onChange && onChange(e.value)}
    />
  );
};

export default CustomSelect;
