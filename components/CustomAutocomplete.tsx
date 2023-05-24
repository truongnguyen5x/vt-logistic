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
  value?: string;
  onChange?: (newValue: string) => void;
  options: IOption[];
  classNamePrefix?: string;
};

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <Image src={ArrowDownImg} width={24} height={24} alt="" />
    </components.DropdownIndicator>
  );
};

const MenuCustom = (props: any) => {
  return (
    <components.Menu {...props} innerProps={{
      ...props.innerProps,
      onClick: e => {
        e.preventDefault();
        e.stopPropagation();        
      }
    }} />
  );
};

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  classNamePrefix = "custom-select",
}) => {
  const [_value, setValue] = useState<IOption | undefined>(undefined);

  useEffect(() => {
    if (value && options.length > 0) {
      const temp = options.find((i) => i.value == value);
      setValue(temp);
    }
  }, [value, options]);
  
  return (
    <Select
      classNamePrefix={classNamePrefix}
      value={_value}
      isSearchable
      components={{
        DropdownIndicator: DropdownIndicator,
        Menu: MenuCustom,
      }}
      options={options}
      menuPortalTarget={document.querySelector("body")}
      styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
      onChange={(e) => e && onChange && onChange(e.value)}
    />
  );
};

export default CustomSelect;
