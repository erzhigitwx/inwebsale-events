import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "@/firebase";
import { fetchEventsFx, resetEvents, setError } from "../model";

export const handleDeleteEvent = async (setIsDeleteModal: (arg: boolean) => void, id: string) => {
  const docRef = doc(db, `events/${id}`);
  try {
    await deleteDoc(docRef);
    resetEvents();
    fetchEventsFx("events");
  } catch (error) {
    setError(true);
  }
  setIsDeleteModal(false);
};