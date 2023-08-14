import React, { FC } from "react";
// components
import Image from "next/image";
import { ButtonIndicator } from "@/shared/UI";
// types
import { EventType } from "@/shared/types/types";

interface ProfileEventsItemProps {
  event: EventType;
}

const ProfileEventsItem: FC<ProfileEventsItemProps> = ({ event }) => {
  const eventStartDate = new Date(event.eventDate);
  const eventEndDate = new Date(event.eventDate);
  const now = new Date();
  const isInProgress: boolean = now >= eventStartDate && now <= eventEndDate;
  eventEndDate.setHours(eventStartDate.getHours() + 1);
  const isPast: boolean = eventStartDate < now;

  return (
    <div className={"flex flex-row justify-start items-center gap-4"}>
      <div className={"flex flex-row justify-start items-center gap-6"}>
        <p className={"text-black text-medium text-base"}>1</p>
        <p className={"text-black text-medium text-base max-w-[150px]"}>{event.eventTitle}</p>
      </div>
      <Image src={"./assets/images/plus-circle.svg"} alt={"plus"} width={30} height={30}/>
      <div className={"flex flex-row justify-start items-center gap-14"}>
        <ButtonIndicator className={`${isPast ? "bg-purple" : isInProgress ? "bg-green-light" : "bg-blue-light"}`}>{isPast ? "завершено" : isInProgress ? "в процессе" : "запланировано"}</ButtonIndicator>
        <p className={"text-black text-medium text-base max-w-[140px]"}>{event.eventDate}, {event.eventTime}</p><p className={"text-black text-medium text-base max-w-[130px]"}>{event.hostName}</p>
        <p className={"text-black text-medium text-base max-w-[130px]"}>{event.hostName}</p>
        <ButtonIndicator className={"bg-green-light"}>открытый</ButtonIndicator>
        <ButtonIndicator className={"bg-purple"}>выкл</ButtonIndicator>
        <Image src={"./assets/images/trash.svg"} alt={"trash"} width={50} height={50} className={"py-2 px-2 rounded-xl bg-gray list-none grid place-items-center bg-opacity-20"}/>
      </div>
    </div>
  );
};

export { ProfileEventsItem };