import React, { FC, useEffect, useState } from "react";
import { ModalImage } from "@/shared/UI";
import { EventType } from "@/shared/types/types";

interface EventInfoPanelProps {
  event: EventType;
}

const EventInfoPanel: FC<EventInfoPanelProps> = ({ event }) => {
  const [showPanel, setShowPanel] = useState(false);
  const [isImagePopup, setIsImagePopup] = useState<boolean>(false);

  useEffect(() => {
    setShowPanel(true);
  }, []);

  return (
    <div className={`w-[92%] my-4 ${showPanel ? "fade-in show" : "fade-in"}`}>
      <hr className={"text-gray"}/>
      <div className={"mt-2 ml-20 flex flex-row justify-between items-center"}>
        <div className={"flex flex-col justify-around gap-5"}>
          <span className={"flex flex-row justify-start items-center gap-6"}><h3 className={"text-xl font-bold text-black dark:prose-darkMode"}>Ссылка на мероприятие:</h3><a href={"http://localhost:3000/events"} className={"text-blue"}>http://localhost:3000/events</a></span>
          <span className={"flex flex-row justify-start items-center gap-6"}><h3 className={"text-xl font-bold text-black dark:prose-darkMode"}>YouTube трансляция:</h3>{!!event.youtubeLink &&
            <a href={event.youtubeLink} className={"text-blue"}>{event.youtubeLink}</a> || <h3 className={"text-red"}>Not specified</h3>}</span>
          <span className={"flex flex-row justify-start items-center gap-6"}><h3 className={"text-xl font-bold text-black dark:prose-darkMode"}>Заглушка:</h3>{!!event.placeholderLink &&
            <a href={event.placeholderLink} className={"text-blue"}>{event.placeholderLink}</a> || <h3 className={"text-red"}>not specified</h3>}</span>
          <span className={"flex flex-row justify-start items-center gap-6"}><h3 className={"text-xl font-bold text-black dark:prose-darkMode"}>Кликабельные ссылки от пользователей:</h3>{event.externalButton &&
            <a href={event.externalButton} className={"text-blue"}>{event.externalButton}</a> || <h3 className={"text-red"}>not specified</h3>}</span>
          {event.withPin &&
            <span className={"flex flex-row justify-start items-center gap-6"}><h3 className={"text-xl font-bold text-black dark:prose-darkMode"}>Пароль для входа: <strong className={"text-blue"}>{event.pin}</strong></h3></span>}
        </div>
        {event.file && <ModalImage src={event.file} alt={"event image"} isOpen={isImagePopup} setIsOpen={setIsImagePopup}  className={"w-60 h-60 p-1 border-4 rounded-3xl"} after={"w-[50vh] h-[50vh]"}/>}
      </div>
    </div>
  );
};

export { EventInfoPanel };