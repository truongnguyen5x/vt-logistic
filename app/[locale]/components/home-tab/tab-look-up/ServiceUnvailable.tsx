import { FC, Fragment } from "react";
import { ILookupContent } from "..";
import Image from "next/image";
import ExitImg from "@assets/images/icons/exit.svg";

interface ServiceUnavailableProps {
  title: string;
}

const ServiceUnavailable: FC<ServiceUnavailableProps> = ({ title }) => {
  return (
    <Fragment>
      <div className="h-full flex flex-col justify-center items-center gap-5">
        <Image src={ExitImg} width={80} height={80} alt="exit" />
        <p className="text-th-gray-300 font-semibold text-2xl">{title}</p>
      </div>
    </Fragment>
  );
};
export default ServiceUnavailable;
