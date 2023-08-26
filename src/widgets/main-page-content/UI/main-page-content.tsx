import React, { FC } from "react";
import { useTranslation } from "react-i18next";

const MainPageContent: FC = () => {
  const { t } = useTranslation();
  return (
    <section className={"flex flex-col-reverse text-center text lg:flex-row justify-center items-center gap-10 lg:gap-24 dark:prose-darkMode"}>
      <div className={"flex flex-col gap-6 lg:max-w-[50%]"}>
        <h1 className={"text-xl lg:text-3xl"}>{t("planning of any events")}</h1>
        <p className={"text-sm lg:text-base text-gray"}>{t("about inwebsale")}</p>
      </div>
      <div className={"flex flex-col justify-center items-center gap-2"}>
        <img className={"w-[70%] h-[70%] lg:w-[483px] lg:h-[623px] object-fit"} src="./assets/images/main-person.svg" alt="main person"/>
        <h2 className={"text-xl lg:text-2xl"}>{t("thesis inwebsale")}</h2>
      </div>
    </section>
  );
};

export { MainPageContent };