import React, { FC, useEffect, useState } from "react";
// components
import { ButtonIndicator, ModalImage } from "@/shared/UI";
// types
import { TFunction } from "i18next";
import { EventType } from "@/shared/types/types";
// helpers
import { getEventStatus } from "@/shared/utils/get-event-status";
import { getUTCOffset } from "@/shared/UI/event/helpers/get-UTCoffset-by-timezone";

interface EventInfoPanelProps {
  event: EventType;
  t: TFunction;
}

const EventInfoPanel: FC<EventInfoPanelProps> = ({ event, t }) => {
  const [showPanel, setShowPanel] = useState(false);
  const [isImagePopup, setIsImagePopup] = useState<boolean>(false);
  const correctEventTime = getUTCOffset(event.timeZone, event.eventTime);
  const { isPast, isInProgress } = getEventStatus(event.eventDate, correctEventTime);

  useEffect(() => {
    setShowPanel(true);
  }, []);

  return (
    <div className={`lg:w-[92%] my-4 ${showPanel ? "fade-in show" : "fade-in"}`}>
      <hr className={"text-gray"}/>
      <div className={"mt-2 lg:ml-20 flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row justify-between items-center"}>
        <div className={"flex flex-col justify-around gap-5"}>
          <span className={"flex flex-row justify-start items-center gap-6"}><h3 className={"text-xl font-bold text-black dark:prose-darkMode"}>Ссылка на мероприятие:</h3><a href={"https://inwebsale-events-prod.vercel.app/events"}
            className={"text-blue"}>http://localhost:3000/events</a></span>
          <span className={"flex flex-row justify-start items-center gap-6"}><h3 className={"text-xl font-bold text-black dark:prose-darkMode"}>YouTube трансляция:</h3>{!!event.youtubeLink &&
            <a href={event.youtubeLink} className={"text-blue"}>{event.youtubeLink}</a> || <h3 className={"text-red"}>Not specified</h3>}</span>
          <span className={"flex flex-row justify-start items-center gap-6"}><h3 className={"text-xl font-bold text-black dark:prose-darkMode"}>Заглушка:</h3>{!!event.placeholderLink &&
            <a href={event.placeholderLink} className={"text-blue"}>{event.placeholderLink}</a> || <h3 className={"text-red"}>not specified</h3>}</span>
          <span className={"flex flex-row justify-start items-center gap-6"}><h3 className={"text-xl font-bold text-black dark:prose-darkMode"}>Кликабельные ссылки от пользователей:</h3>{event.externalButton &&
            <a href={event.externalButton} className={"text-blue"}>{event.externalButton}</a> || <h3 className={"text-red"}>not specified</h3>}</span>
          <span className={"flex flex-row justify-start items-center gap-6"}>
            <h3 className={"lg:hidden text-xl font-bold text-black dark:prose-darkMode"}>{t("status")}</h3>
            <ButtonIndicator
              className={`${isPast ? "bg-purple dark:bg-red" : isInProgress ? "bg-green-light dark:bg-green" : "bg-blue-light dark:bg-blue"} lg:hidden`}>{isPast ? "завершено" : isInProgress ? "в процессе" : "запланировано"}</ButtonIndicator>
          </span>
          <span className={"flex flex-row justify-start items-center gap-6"}>
            <h3 className={"lg:hidden text-xl font-bold text-black dark:prose-darkMode"}>{t("start")}</h3>
            <p className="lg:hidden dark:prose-darkMode underline underline-offset-2">{event.eventDate} {correctEventTime}</p>
          </span>
          <span className={"flex flex-row justify-start items-center gap-6"}>
            <h3 className={"lg:hidden text-xl font-bold text-black dark:prose-darkMode"}>{t("host")}</h3>
            <p className={"lg:hidden dark:prose-darkMode"}>{event.hostName}</p>
          </span>
          <span className={"flex flex-row justify-start items-center gap-6"}>
            <h3 className={"lg:hidden text-xl font-bold text-black dark:prose-darkMode"}>{t("moderator")}</h3>
            <p className={"lg:hidden dark:prose-darkMode"}>{event.hostName}</p>
          </span>
          {event.withPin &&
            <span className={"flex flex-row justify-start items-center gap-6"}><h3 className={"text-xl font-bold text-black dark:prose-darkMode"}>Пароль для входа: <strong className={"text-blue"}>{event.pin}</strong></h3></span>}
        </div>
        {event.file && <ModalImage src={event.file} alt={"event image"} isOpen={isImagePopup} setIsOpen={setIsImagePopup} className={"w-60 h-60 p-1 border-4 rounded-3xl"} after={"w-[50vh] h-[50vh]"}/>}
      </div>
    </div>
  );
};

export { EventInfoPanel };