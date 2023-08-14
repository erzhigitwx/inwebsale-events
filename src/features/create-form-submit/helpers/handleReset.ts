import { resetInputs } from "@/entities/create-inputs/model/inputs";
import { resetDate } from "@/entities/create-inputs/model/date";
import { resetFile } from "@/entities/create-inputs/model/file";
import { resetPin } from "@/entities/create-inputs/model/radio";
import { resetToSave } from "@/entities/create-inputs/model/toggle";

export function handleReset() {
  resetInputs();
  resetDate();
  resetFile();
  resetPin();
  resetToSave();
}