"use client";
import { FC, Fragment } from "react";
import Slider from "react-slick";
import styles from "@app/styles.module.scss";
import Image from "next/image";
import LeftArrowImg from "@assets/images/icons/arrow_left.svg";
import RightArrowImg from "@assets/images/icons/arrow_right.svg";
import { ComponentHomePartnerHomePartner, Maybe } from "@generated/graphql";
import { getPrefixImageUrl } from "@ultility/index";

interface PartnerProps {
  assets?: Maybe<Array<Maybe<ComponentHomePartnerHomePartner>>>;
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
  return (
    <Fragment>
      <div className="container mx-auto">
        <p className="animation section-name mb-6">{title}</p>

        <div className="mt-16 animation" data-animation-delay="0.4s">
          <Slider
            speed={500}
            dots={false}
            autoplay
            infinite
            slidesToShow={5}
            slidesToScroll={5}
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
