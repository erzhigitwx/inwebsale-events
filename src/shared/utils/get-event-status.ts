import { EventType } from "@/shared/types/types";

type getEventStatusType = {
  isPast: boolean,
  isInProgress: boolean
}

export function getEventStatus(event: EventType): getEventStatusType {
  const eventStartDate = new Date(event.eventDate);
  const eventTimeParts = event.eventTime.split(":");
  eventStartDate.setHours(Number(eventTimeParts[0]), Number(eventTimeParts[1]), 0, 0);

  const eventEndDate = new Date(eventStartDate);
  eventEndDate.setHours(eventStartDate.getHours() + 1);

  const now = new Date();
  const isInProgress: boolean = now >= eventStartDate && now <= eventEndDate;
  const isPast: boolean = now > eventEndDate;
  return {
    isPast, isInProgress
  };
}