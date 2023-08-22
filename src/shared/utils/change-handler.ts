import { ChangeEvent } from "react";

export const changeHandler = (e: ChangeEvent<HTMLInputElement>, setter: (arg: string) => void): void => {
  setter(e.target.value);
};