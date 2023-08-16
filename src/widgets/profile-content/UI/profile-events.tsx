import React, { FC } from "react";
import { Session } from "next-auth";
import { useStore } from "effector-react";
import { TFunction } from "i18next";
// stores
import { $error, $events, $loading } from "@/widgets/profile-content/model";
// types
import { EventType } from "@/shared/types/types";
import Link from "next/link";
import { ProfileEventsNavbar } from "@/widgets/profile-content/UI/navbar/profile-events-navbar";
import { ProfileEventsItem } from "@/widgets/profile-content/UI/events-block/profile-events-item";

interface ProfileEventsProps {
  t: TFunction;
  isFetched: boolean;
  data: Session | null;
}

const ProfileEvents: FC<ProfileEventsProps> = ({ t, isFetched, data }) => {
  const isLoading: boolean = useStore($loading);
  const isError: boolean = useStore($error);
  const events: EventType[] = useStore($events);
  const userEvents: EventType[] = events.filter((event: EventType) => event?.email && data?.user?.email && event.email.includes(data.user.email));

  return (
    <div className="col-span-8">
      <h1 className={"text-2xl dark:text-white"}>{t("my events")}:</h1>
      <div className={"mt-9"}>
        {isLoading ?
          <h1 className={"text-xl dark:text-white"}>Loading...</h1>
          : isError ?
            <h1 className={"text-xl text-red"}>Something went wrong! Please try again later.</h1>
            : isFetched ?
              userEvents.length === 0 ?
                <h1 className={"text-xl  dark:text-white"}>You <strong className={"text-red underline"}>don't</strong> have any events yet!&#128547; <Link href={"/create"} className={"text-2xl text-blue underline"}>Create an event</Link>
                </h1>
                :
                <div>
                  <ProfileEventsNavbar/>
                  <div className={"mt-8 flex flex-col gap-6"}>
                    {userEvents.map((event: EventType) =>
                      <ProfileEventsItem event={event} key={event.createdAt.seconds.toString()}/>
                    )}
                  </div>
                </div>
              : null}
      </div>
    </div>
  );
};

export { ProfileEvents };