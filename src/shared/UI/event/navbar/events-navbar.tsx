import React from "react";
import { TFunction } from "i18next";

const EventsNavbar = ({ t }: {t: TFunction}) => {
  return (
    <div className="grid grid-cols-[0.3fr,1fr,1.2fr,0.8fr,1fr,1fr,1fr,1fr,1fr] gap-4 items-center text-gray text-medium text-base">
      <p>№</p>
      <p>{t("name")}</p>
      <p>{t("status")}</p>
      <p>{t("start")}</p>
      <p>{t("host")}</p>
      <p>{t("moderator")}</p>
      <p>{t("access")}</p>
      <p>{t("chat")}</p>
      <p>{t("options")}</p>
    </div>
  );
};

export { EventsNavbar };