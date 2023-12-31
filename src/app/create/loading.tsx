import React, { FC } from "react";
import { Loader } from "@/shared/UI";

const LoaderPage: FC = () => {
  return (
    <div className={"grid place-items-center h-[100%]"}>
      <Loader/>
    </div>
  );
};

export default LoaderPage;