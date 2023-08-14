import React, { FC } from "react";
import { TFunction } from "i18next";
// components
import { CreateRadio } from "@/entities/create-inputs/UI/Create-radio";
import { CreateDate, CreateFile, CreateInput, ToggleButton } from "@/entities/create-inputs";
// helpers
import { changeToSave } from "@/shared/utils/change-to-save";
// store
import { pinValueChanged } from "@/entities/create-inputs/model/inputs";
// mock
import { radioDataFn } from "@/entities/create-inputs/mock";
// types
import { ErrorType } from "@/shared/types/types";

interface CreateFormRightProps {
  t: TFunction;
  withPin: boolean;
  toSave: boolean;
  errors: ErrorType[];
  pin: string;
}

const CreateFormRight: FC<CreateFormRightProps> = ({ t, errors, withPin, toSave, pin }) => {
  const radioData = radioDataFn(t, withPin);
  const pinError: string | undefined = errors.find((error: ErrorType) => error?.name === "pin")?.error;
  const fileError: string | undefined = errors.find((error: ErrorType) => error?.name === "file")?.error;
  return (
    <div className={"col-span-2"}>
      <div className={"flex flex-col justify-start gap-4"}>
        <h3 className={"prose dark:prose-darkMode"}>{t("Access to the event")}:</h3>
        <div className={"flex flex-col justify-center items-start gap-5"}>
          {radioData.map((radio) =>
            <CreateRadio onChange={radio.onChange} isChecked={radio.isChecked} text={radio.text} key={radio.text}/>
          )}
        </div>
        {withPin &&
          <CreateInput name={"pin"} label={t("pin")} error={pinError} onChange={(e) => pinValueChanged(e.target.value)} value={pin}/>
        }
      </div>
      <div className={"mt-12"}>
        <div className={"flex flex-row justify-between items-center"}>
          <h3 className={"prose dark:prose-darkMode"}>{t("save event")}</h3>
          <ToggleButton
            label=""
            onClick={() => changeToSave(toSave)}
            isToggled={toSave}
          />
        </div>
      </div>
      <CreateDate t={t}/>
      <div className={"mt-12 flex flex-col justify-start items-start gap-3"}>
        <h3 className={"prose dark:prose-darkMode"}>{t("presentation")}:</h3>
        <CreateFile text={t("Download PDF")} t={t} error={fileError}/>
      </div>
    </div>
  );
};

export { CreateFormRight };