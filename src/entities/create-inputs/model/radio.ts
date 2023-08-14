import { createEvent, createStore } from "effector";

export const $withPin = createStore<boolean>(false);

export const withPinChanged = createEvent<boolean>();
export const resetPin = createEvent();
$withPin.on(withPinChanged, (_, result) => !result).reset(resetPin);