import SearchImg from "@assets/images/icons/search.svg";
import SearchLightImg from "@assets/images/icons/search_light.svg";
import Image from "next/image";
import { Fragment } from "react";

const SearchHeader = () => {
  return (
    <Fragment>
      <div className="search-header">
        <Image width={30} height={30} src={SearchImg} alt="search-icon" />
        <Image width={30} height={30} src={SearchLightImg} alt="search-icon" />
      </div>
    </Fragment>
  );
};

export default SearchHeader;
