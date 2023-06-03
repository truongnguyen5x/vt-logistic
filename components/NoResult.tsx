import Image from "next/image";
import { FC } from "react";
import SearchImg from "@assets/images/icons/search.svg";

interface Props {
  txt: string;
}

const NoResult: FC<Props> = ({ txt }) => {
  return (
    <div className="flex flex-col items-center self-center my-5">
      <Image src={SearchImg} width={48} height={48} alt="" />
      <p className="text-lg">{txt}</p>
    </div>
  );
};

export default NoResult;
