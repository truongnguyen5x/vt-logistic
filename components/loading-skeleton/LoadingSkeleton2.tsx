import { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton2 = () => {
  return (
    <Fragment>
      <Skeleton height={400} />
      <div className="container mx-auto my-5">
        <Skeleton height={80} />
      </div>
      <div className="container mx-auto my-5">
        <Skeleton height={160} />
      </div>
      <div className="container mx-auto my-5">
        <Skeleton height={160} />
      </div>
      <div className="container mx-auto my-5">
        <Skeleton height={160} />
      </div>
    </Fragment>
  );
};

export default LoadingSkeleton2;
