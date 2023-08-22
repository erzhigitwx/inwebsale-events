import React, { FC } from "react";
import { TFunction } from "i18next";
import { Events } from "@/shared/UI";
import { useEventsFetching } from "@/shared/hooks/useEventsFetching";

interface ProfileEventsProps {
  t: TFunction;
}

const ProfileEvents: FC<ProfileEventsProps> = ({ t }) => {
  const { isFetched } = useEventsFetching();
  return (
    <Events isProfile={true} t={t} isFetched={isFetched}/>
  );
};

export { ProfileEvents };