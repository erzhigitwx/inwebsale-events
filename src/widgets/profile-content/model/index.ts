import { createEffect, createEvent, createStore } from "effector";
import { db } from "@/firebase";
import { collection, getDocs } from "@firebase/firestore";
import { EventType } from "@/shared/types/types";

export const fetchEventsFx = createEffect<string, EventType[] | undefined>(async (name: string) => {
  try {
    setLoading(true);
    setError(false);
    const selectedCollection = collection(db, name);
    const querySnapshot = await getDocs(selectedCollection);

    const collectionDocs = querySnapshot.docs.map(doc => {
      const data = doc.data() as EventType;
      data.id = doc.id;
      return data;
    });
    return collectionDocs;
  } catch (error) {
    setError(true);
  } finally {
    setLoading(false);
  }
});

export const setLoading = createEvent<boolean>();
export const setError = createEvent<boolean>();
export const resetEvents = createEvent();

export const $loading = createStore<boolean>(false).on(setLoading, (prev: boolean, curr: boolean): boolean => curr);
export const $error = createStore<boolean>(false).on(setError, (prev: boolean, curr: boolean): boolean => curr);
export const $events = createStore<EventType[]>([])
  .on(fetchEventsFx.doneData, (prevEvents, result) => {
    return result ? [...prevEvents, ...result] : prevEvents;
  })
  .reset(resetEvents);
fetchEventsFx.fail.watch(({ error, params }) => {
  console.error(params);
  console.error(error);
});