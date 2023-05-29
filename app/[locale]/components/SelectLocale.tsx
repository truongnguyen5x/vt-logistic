import VnFlagImg from "@assets/images/flag/vn.png";
import Image from "next/image";

const SelectLocale = () => {
  return (
    <div className="locale-header">
      <Image width={30} height={30} src={VnFlagImg} alt="flag" />
    </div>
  );
};

export default SelectLocale;
