import React, { FC } from "react";
import { Loader } from "@/shared/UI";

const LoadingPage: FC = () => {
  return (
    <div className={"grid place-items-center h-[100%]"}>
      <Loader/>
      <div className={"text"}></div>
    </div>
  );
};

export default LoadingPage;