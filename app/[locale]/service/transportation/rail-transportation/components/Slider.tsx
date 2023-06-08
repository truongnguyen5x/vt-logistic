import styles from "../style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image from "next/image";
import { ComponentServiceFeature, Maybe } from "@generated/graphql";
import { FC } from "react";

interface Props {
  features?: Maybe<Array<Maybe<ComponentServiceFeature>>>;
}

const SliderRail: FC<Props> = ({ features }) => {
  return (
    <Slider speed={500} autoplay infinite dots={false} arrows={false}></Slider>
  );
};

export default SliderRail;
