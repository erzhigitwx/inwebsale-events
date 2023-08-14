import { toSaveChanged } from "@/entities/create-inputs/model/toggle";

export const changeToSave = (toSave: boolean):void => {
  toSaveChanged(!toSave);
};