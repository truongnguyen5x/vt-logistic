"use client";

import React from "react";
import { FC, Fragment } from "react";
import { useSpring, animated } from "react-spring";

// interface AnimatedNumberProps {
//   n: number;
// }
const AnimatedNumber = ({ n }: { n: number }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 1000,
    // config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <Fragment>
      <animated.span>
        {number.to((n) => n.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, "."))}
      </animated.span>
    </Fragment>
  );
};

export default React.memo(AnimatedNumber);
