"use client";

import React, { FC, useState } from "react";
// components
import Image from "next/image";
import { EventPinModal } from "@/shared/UI/event/modal/event-pin-modal";
import { EventModal } from "@/shared/UI/event/modal/event-modal";
import { ButtonIndicator } from "@/shared/UI";
// types
import { EventType } from "@/shared/types/types";
// helpers
import { getEventStatus } from "@/shared/utils/get-event-status";
import { TFunction } from "i18next";

interface EventBlockProps {
  event: EventType;
  setOpenedEvent: (arg: string) => void,
  openedEvent: string;
  index: number;
  isProfile: boolean;
  t: TFunction
}

const EventBlock: FC<EventBlockProps> = ({ event, setOpenedEvent, openedEvent, index, isProfile, t }) => {
  const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);
  const [showPinModal, setShowPinModal] = useState<boolean>(false);
  const [verifiedPins, setVerifiedPins] = useState<string[]>([]);
  const { isPast, isInProgress } = getEventStatus(event);

  const handlePlusMinusClick = () => {
    // если это профиль, если это без пароля, если
    if (isProfile || !event.withPin || event.withPin && verifiedPins.includes(event.id)) {
      setOpenedEvent(openedEvent.includes(event.id) ? "" : event.id);
    }
  };

  const handleLockClick = () => {
    // открытие модалки
    if (!isProfile && event.withPin) {
      setShowPinModal(true);
    }
  };

  if (showPinModal) return <EventPinModal setIsOpen={setShowPinModal} setVerifiedPins={setVerifiedPins} verifiedPins={verifiedPins} t={t} pin={event.pin} id={event.id}/>;
  if (isDeleteModal) return <EventModal setIsDeleteModal={setIsDeleteModal} id={event.id}/>;

  return (
    <div className="grid grid-cols-[0.3fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr] gap-4 items-center text-black text-medium text-base dark:prose-darkMode">
      <p>{index + 1}</p>
      <div className={"flex flex-row justify-between items-center gap-2"}>
        <p className="max-w-[150px] transition-none">{event.eventTitle}</p>
        {/* показ замка, если это не профиль, открывается при нажатии модалка, если правильно ввести пароль, показываться будет +- иконки*/}
        {
          event.withPin && !isProfile && !verifiedPins.includes(event.id)
            ? <Image src={"./assets/images/lock.svg"} alt={"lock"} className="px-2 py-2 rounded-xl bg-gray list-none grid place-items-center bg-opacity-50" onClick={handleLockClick} width={40} height={40}/>
            : openedEvent.includes(event.id)
            && <Image src={"./assets/images/minus-circle.svg"} alt={"minus icon"} onClick={handlePlusMinusClick} width={40} height={40} className={"hover:rotate-180 hover:scale-150"}/>
            || <Image src={"./assets/images/plus-circle.svg"} alt={"plus icon"} onClick={handlePlusMinusClick} width={40} height={40} className={"hover:rotate-180 hover:scale-150"}/>
        }
      </div>
      <ButtonIndicator className={`${isPast ? "bg-purple dark:bg-red" : isInProgress ? "bg-green-light dark:bg-green" : "bg-blue-light dark:bg-blue"}`}>{isPast ? "завершено" : isInProgress ? "в процессе" : "запланировано"}</ButtonIndicator>
      <p className="text-center">{event.eventDate}, {event.eventTime}</p>
      <p>{event.hostName}</p>
      <p>{event.hostName}</p>
      <ButtonIndicator className={`${event.withPin ? "bg-purple dark:bg-red" : "bg-green-light dark:bg-green"}`}>{event.withPin ? "закрытый" : "открытый"}</ButtonIndicator>
      <ButtonIndicator className="bg-purple dark:bg-red">выкл</ButtonIndicator>
      {isProfile &&
        <Image src={"./assets/images/trash.svg"} alt={"trash"} width={50} height={50} className="py-2 px-2 rounded-xl bg-gray list-none grid place-items-center bg-opacity-20" onClick={() => setIsDeleteModal(true)}/>
        ||
        event.withPin && <Image src={"./assets/images/lock.svg"} alt={"lock"} width={50} height={50} className="py-2 px-2 rounded-xl bg-gray list-none grid place-items-center bg-opacity-20"/>
        || <Image src={"./assets/images/success.svg"} alt={"success"} width={50} height={50} className="py-2 px-2 rounded-xl bg-gray list-none grid place-items-center bg-opacity-20"/>
      }
    </div>
  );
};


export { EventBlock };