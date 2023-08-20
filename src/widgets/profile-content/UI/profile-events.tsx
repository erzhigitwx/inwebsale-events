import React, { FC } from "react";
import { TFunction } from "i18next";
import { Events } from "@/shared/UI";

interface ProfileEventsProps {
  t: TFunction;
}

const ProfileEvents: FC<ProfileEventsProps> = ({ t }) => {
  return (
    <Events isProfile={true} t={t} />
  );
};

export { ProfileEvents };