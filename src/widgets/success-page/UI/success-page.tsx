import React, { FC } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface SuccessPageProps {

}

const SuccessPage: FC<SuccessPageProps> = () => {
  const { t } = useTranslation("create");

  return (
    <div className={"flex flex-col items-center justify-center gap-16 h-[80vh]"}>
      <Image src={"./assets/images/success-icon.svg"} alt={"success"} width={400} height={400}/>
      <h1 className={"text-center text-black text-3xl px-[25%] font-semibold dark:prose-darkMode"}>{t("success text")}</h1>
    </div>
  );
};

export { SuccessPage };