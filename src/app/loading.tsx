import React, { FC } from "react";
import { Loader } from "@/shared/UI";

const LoadingPage: FC = () => {
  return (
    <div className={"grid place-items-center h-full"}>
      <Loader/>
    </div>
  );
};

export default LoadingPage;