import { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton1 = () => {
  return (
    <Fragment>
      <Skeleton height={300} />
      <div className="container mx-auto my-5">
        <Skeleton height={50} width={500} />
      </div>
      <div className="container mx-auto my-5">
        <Skeleton height={500} />
      </div>
      <div className="container mx-auto my-5">
        <Skeleton height={500} />
      </div>
    </Fragment>
  );
};

export default LoadingSkeleton1;
