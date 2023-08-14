import { createEvent, createStore } from "effector";
// day logic
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
const day = currentDate.getDate().toString().padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;
export const $eventDate = createStore<string>(formattedDate);
export const $eventTime = createStore<string>("21:00");
export const eventDataChanged = createEvent<string>();
export const eventTimeChanged = createEvent<string>();
export const resetDate = createEvent();
$eventDate.on(eventDataChanged, (_, result) => result).reset(resetDate);
$eventTime.on(eventTimeChanged, (_, result) => result).reset(resetDate);