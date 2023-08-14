import { ChangeEvent } from "react";
import { selectedFileChanged } from "@/entities/create-inputs/model/file";

export const changeFile = (e: ChangeEvent<HTMLInputElement>, setter: (arg: boolean) => void): void => {
  if (e.target.files?.length) {
    const file: File = e.target.files[0];
    selectedFileChanged(URL.createObjectURL(file));
    setter(true);
  }
};