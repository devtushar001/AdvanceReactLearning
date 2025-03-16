import React, { Suspense, lazy } from "react";
import InfinityLoader from "../InfinityLoader";
const LazyComponent = lazy(() => import("../LazyComponent/LazyComponent"));

const Miscellaneous = () => {
  return (
    <Suspense fallback={<InfinityLoader />}>
      <LazyComponent />
    </Suspense>
  );
};

export default Miscellaneous;
