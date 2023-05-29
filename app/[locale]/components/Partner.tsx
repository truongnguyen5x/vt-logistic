"use client";
import { FC, Fragment } from "react";
import Slider from "react-slick";
import styles from "@app/styles.module.scss";
import Image from "next/image";
import LeftArrowImg from "@assets/images/icons/arrow_left.svg";
import RightArrowImg from "@assets/images/icons/arrow_right.svg";
import { ComponentHomeHomePartner, Maybe } from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";
import useWindowSize from "@hooks/use-window-size";
import clsx from "clsx";
interface PartnerProps {
  assets?: Maybe<Array<Maybe<ComponentHomeHomePartner>>>;
  title: string;
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={[className, styles.arrowRightSlider].join(" ")}
      style={style}
      onClick={onClick}
    >
      <Image src={RightArrowImg} alt="" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={[className, styles.arrowLeftSlider].join(" ")}
      style={style}
      onClick={onClick}
    >
      <Image src={LeftArrowImg} alt="" />
    </div>
  );
}

const Partner: FC<PartnerProps> = ({ assets, title }) => {
  const { isDesktop } = useWindowSize();
  return (
    <Fragment>
      <div className="container mx-auto">
        <p className="animation section-name mb-6 mt-10">{title}</p>

        <div
          className={clsx("mt-10 lg:mt-16 animation", styles.partnerWp)}
          data-animation-delay="0.4s"
        >
          <Slider
            speed={500}
            autoplay
            variableWidth
            infinite
            dots={!isDesktop}
            arrows={isDesktop}
            nextArrow={<SampleNextArrow />}
            prevArrow={<SamplePrevArrow />}
          >
            {!!assets &&
              assets.map((i, idx) => (
                <div key={idx} className={styles.partnerItem}>
                  <Image
                    alt=""
                    src={getPrefixImageUrl(i?.image?.data?.attributes?.url)}
                    width={253}
                    height={165}
                  />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </Fragment>
  );
};

export default Partner;
