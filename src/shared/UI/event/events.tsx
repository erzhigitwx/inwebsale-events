"use client";

import React, { FC, useEffect, useState } from "react";
import { useStore } from "effector-react";
import { useSession } from "next-auth/react";
// components
import Link from "next/link";
import { EventBlock } from "@/shared/UI/event/event-block";
import { EventsNavbar } from "@/shared/UI/event/navbar/events-navbar";
import { EventInfoPanel } from "@/shared/UI/event/info-panel/event-info-panel";
// store
import { $error, $events, $loading, fetchEventsFx, resetEvents } from "@/shared/UI/event/model";
// types
import { EventType } from "@/shared/types/types";
import { TFunction } from "i18next";
import { Session } from "next-auth";

interface EventsProps {
  isProfile: boolean;
  t: TFunction;
}

const Events: FC<EventsProps> = ({ isProfile, t }) => {
  const [openedEvent, setOpenedEvent] = useState<string>("");
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const { data }: { data: Session | null } = useSession();
  const allEvents: EventType[] = useStore($events);
  const isLoading: boolean = useStore($loading);
  const isError: boolean = useStore($error);
  const profileEvents: EventType[] = allEvents.filter((event: EventType) => data?.user?.email === event.email);
  const eventsToDisplay = isProfile ? profileEvents : allEvents;

  useEffect(() => {
    fetchEventsFx("events").finally(() => setIsFetched(true));
    return () => {
      resetEvents();
    };
  }, []);

  return (
    <div className="col-span-8">
      {isProfile ? <h1 className={"text-2xl dark:text-white"}>{t("my events")}:</h1> : <h1 className={"text-2xl dark:text-white"}>{t("events")}:</h1>}
      <div className={"mt-9"}>
        {isLoading ?
          <h1 className={"text-xl dark:text-white"}>{t("Loading")}...</h1>
          : isError ?
            <h1 className={"text-xl text-red"}>{t("Error")}.</h1>
            : isFetched ?
              <div>
                {eventsToDisplay.length === 0 ?
                  isProfile ? <h1 className={"text-xl dark:text-white flex gap-2"}>
                    {t("You")}
                    <strong className={"text-red underline"}>{t("don't")}</strong>
                    {t("have any events yet")}!&#128547;
                    <Link href={"/create"} className={"text-2xl text-blue underline"}>{t("Create an event")}</Link>
                  </h1> : <h1 className={"text-xl dark:text-white flex gap-2"}>
                    {t("There is")}
                    <strong className={"text-red underline"}>{t("no")}</strong>
                    {t("one events found")}!&#128547;
                    <Link href={"/create"} className={"text-2xl text-blue underline"}>{t("Create an event")}</Link>
                  </h1>
                  :
                  <div>
                    <EventsNavbar t={t}/>
                    <div className={"h-[74vh] mt-8 flex flex-col gap-6 overflow-y-auto"}>
                      {eventsToDisplay.map((event, index) =>
                        <div key={event.createdAt.seconds.toString()}>
                          <EventBlock event={event} setOpenedEvent={setOpenedEvent} openedEvent={openedEvent} index={index} isProfile={isProfile} t={t}/>
                          {openedEvent.includes(event.id) && <EventInfoPanel event={event}/>}
                        </div>
                      )}
                    </div>
                  </div>}
              </div>
              : null}
      </div>
    </div>
  );
};

export { Events };
