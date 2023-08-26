import { createEvent, createStore } from "effector";

// Получение текущей даты и времени
const eventDateTime = new Date();

// Форматирование даты и времени
const formattedDate = eventDateTime.toISOString().slice(0, 10);
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const formattedTime = eventDateTime.toLocaleTimeString("en-US", { timeZone, hour12: false }).slice(0, 5);

// Создание хранилищ для даты и времени
export const $eventDate = createStore<string>(formattedDate);
export const $eventTime = createStore<string>(formattedTime);

// Создание событий для изменения даты и времени
export const eventDateChanged = createEvent<string>();
export const eventTimeChanged = createEvent<string>();
export const resetDate = createEvent();

// Обработчики для обновления даты и времени
$eventDate.on(eventDateChanged, (_, date) => date);
$eventTime.on(eventTimeChanged, (_, time) => {
  const [hours, minutes] = time.split(":").map(Number);
  const newDateTime = new Date(eventDateTime);
  newDateTime.setHours(hours, minutes);
  return newDateTime.toLocaleTimeString("en-US", { timeZone, hour12: false }).slice(0, 5);
});

// Обработчик для сброса даты и времени
$eventDate.reset(resetDate);
$eventTime.reset(resetDate);