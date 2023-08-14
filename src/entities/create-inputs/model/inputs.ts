import { createEvent, createStore } from "effector";

export const $eventTitle = createStore("");
export const $hostName = createStore("");
export const $youtubeLink = createStore("");
export const $placeholderLink = createStore("");
export const $externalButtonLink = createStore("");
export const $pinValue = createStore("");

const eventTitleChanged = createEvent<string>();
const hostNameChanged = createEvent<string>();
const youtubeLinkChanged = createEvent<string>();
const placeholderLinkChanged = createEvent<string>();
const externalButtonLinkChanged = createEvent<string>();
const pinValueChanged = createEvent<string>();
const resetInputs = createEvent();

$eventTitle.on(eventTitleChanged, (_, value) => value).reset(resetInputs);
$hostName.on(hostNameChanged, (_, value) => value).reset(resetInputs);
$youtubeLink.on(youtubeLinkChanged, (_, value) => value).reset(resetInputs);
$placeholderLink.on(placeholderLinkChanged, (_, value) => value).reset(resetInputs);
$externalButtonLink.on(externalButtonLinkChanged, (_, value) => value).reset(resetInputs);
$pinValue.on(pinValueChanged, (_, value) => value).reset(resetInputs);
export {
  eventTitleChanged,
  hostNameChanged,
  youtubeLinkChanged,
  placeholderLinkChanged,
  externalButtonLinkChanged,
  pinValueChanged,
  resetInputs
};