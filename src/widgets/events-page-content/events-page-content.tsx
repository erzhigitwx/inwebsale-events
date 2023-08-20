"use client";

import React, { FC } from "react";
import { Events } from "@/shared/UI";
import { useTranslation } from "react-i18next";

interface EventsPageContentProps {

}

const EventsPageContent: FC<EventsPageContentProps> = () => {
  const { t } = useTranslation("profile");
  return (
    <div>
      <input type="text"/>
      <Events isProfile={false} t={t}/>
    </div>
  );
};

export { EventsPageContent };