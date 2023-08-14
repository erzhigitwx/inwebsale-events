import { createEvent, createStore } from "effector";

export const $toSave = createStore<boolean>(true);

export const toSaveChanged = createEvent<boolean>();
export const resetToSave = createEvent();
$toSave.on(toSaveChanged, (_: boolean, result: boolean) => result).reset(resetToSave);