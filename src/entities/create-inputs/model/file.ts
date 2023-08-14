import { createEvent, createStore } from "effector";

export const $selectedFile = createStore<null | string>(null);

export const selectedFileChanged = createEvent<string>();
export const resetFile = createEvent();
$selectedFile.on(selectedFileChanged, (_, result) => result).reset(resetFile);