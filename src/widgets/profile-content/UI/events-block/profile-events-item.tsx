import React, { FC, useState } from "react";
// components
import Image from "next/image";
import { ButtonIndicator } from "@/shared/UI";
import { ProfileEventsModal } from "@/widgets/profile-content/UI/events-block/profile-events-modal";
// types
import { EventType } from "@/shared/types/types";
// helpers
import { getEventStatus } from "@/shared/utils/get-event-status";

interface ProfileEventsItemProps {
  event: EventType;
}

const ProfileEventsItem: FC<ProfileEventsItemProps> = ({ event }) => {
  const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);
  const { isPast, isInProgress } = getEventStatus(event);
  if (isDeleteModal) return <ProfileEventsModal setIsDeleteModal={setIsDeleteModal} id={event.id}/>;

  return (
    <div className="grid grid-cols-[0.3fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr] gap-4 items-center text-black text-medium text-base">
      <p>1</p>
      <div className={"flex flex-row justify-between items-center gap-2"}>
        <p className="max-w-[150px]">{event.eventTitle}</p>
        <Image src={"./assets/images/plus-circle.svg"} alt={"plus icon"} width={30} height={30}/>
      </div>
      <ButtonIndicator className={`${isPast ? "bg-purple" : isInProgress ? "bg-green-light" : "bg-blue-light"}`}>{isPast ? "завершено" : isInProgress ? "в процессе" : "запланировано"}</ButtonIndicator>
      <p className="text-center">{event.eventDate}, {event.eventTime}</p>
      <p>{event.hostName}</p>
      <p>{event.hostName}</p>
      <ButtonIndicator className={`${event.withPin ? "bg-purple" : "bg-green-light"}`}>{event.withPin ? "закрытый" : "открытый"}</ButtonIndicator>
      <ButtonIndicator className="bg-purple">выкл</ButtonIndicator>
      <Image src={"./assets/images/trash.svg"} alt={"trash"} width={50} height={50} className="py-2 px-2 rounded-xl bg-gray list-none grid place-items-center bg-opacity-20" onClick={() => setIsDeleteModal(true)}/>
    </div>
  );
};


export { ProfileEventsItem };