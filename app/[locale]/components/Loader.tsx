"use client";
import { Fragment, useEffect, useState } from "react";

const Loader = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <Fragment>
      {/* START LOADER  */}
      <div id="loader-wrapper" className={loaded ? "loaded" : ""}>
        <div id="loading-center-absolute">
          <div className="object" id="object_four"></div>
          <div className="object" id="object_three"></div>
          <div className="object" id="object_two"></div>
          <div className="object" id="object_one"></div>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      {/* END LOADER  */}
    </Fragment>
  );
};

export default Loader;
