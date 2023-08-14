import { ChangeEvent } from "react";
import { TFunction } from "i18next";
import { Store } from "effector";
// helpers
import { toggleHandler } from "@/shared/utils/toggle-handler";
import { changeHandler } from "@/shared/utils/change-handler";
// store
import { withPinChanged } from "@/entities/create-inputs/model/radio";
import { $eventTitle, $externalButtonLink, $hostName, $placeholderLink, $youtubeLink, eventTitleChanged, externalButtonLinkChanged, hostNameChanged, placeholderLinkChanged, youtubeLinkChanged } from "@/entities/create-inputs/model/inputs";

interface InputFields {
  name: string,
  label: string,
  placeholder: string,
  value: Store<string>,
  onChange: (arg: ChangeEvent<HTMLInputElement>) => void
}

export const inputDataFn = (t: TFunction): InputFields[] => {
  return [
    {
      name: "eventTitle",
      label: t("event name"),
      placeholder: t("type name"),
      value: $eventTitle,
      onChange: (e: ChangeEvent<HTMLInputElement>) => changeHandler(e, eventTitleChanged)
    }, {
      name: "hostName",
      label: t("leader name"),
      placeholder: t("type name"),
      value: $hostName,
      onChange: (e: ChangeEvent<HTMLInputElement>) => changeHandler(e, hostNameChanged)
    }, {
      name: "youtubeLink",
      label: t("link to youtube translation"),
      placeholder: t("paste link"),
      value: $youtubeLink,
      onChange: (e: ChangeEvent<HTMLInputElement>) => changeHandler(e, youtubeLinkChanged)
    }, {
      name: "placeholderLink",
      label: t("link to the stub"),
      placeholder: t("paste link"),
      value: $placeholderLink,
      onChange: (e: ChangeEvent<HTMLInputElement>) => changeHandler(e, placeholderLinkChanged)
    }, {
      name: "externalButtonLink",
      label: t("outside button(link)"),
      placeholder: t("paste link"),
      value: $externalButtonLink,
      onChange: (e: ChangeEvent<HTMLInputElement>) => changeHandler(e, externalButtonLinkChanged)
    },
  ];
};

interface RadioFields {
  onChange: (arg: ChangeEvent<HTMLInputElement>) => void,
  isChecked: boolean,
  text: string
}

export const radioDataFn = (t: TFunction, isChecked: boolean): RadioFields[] => {
  return [
    {
      onChange: (e) => toggleHandler(e.target.checked, withPinChanged, false),
      isChecked: isChecked,
      text: t("with pin")
    },
    {
      onChange: (e) => toggleHandler(e.target.checked, withPinChanged, true),
      isChecked: !isChecked,
      text: t("open")
    }
  ];
};