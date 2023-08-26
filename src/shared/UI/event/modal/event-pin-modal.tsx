import React, { FC, useState } from "react";
import { TFunction } from "i18next";
// components
import { Button, Input, Modal } from "@/shared/UI";

interface EventPinModalProps {
  setIsOpen: (arg: boolean) => void;
  t: TFunction,
  pin: string | undefined;
  setVerifiedPins: (arg: string[]) => void;
  verifiedPins: string[]
  id: string
}

const EventPinModal: FC<EventPinModalProps> = ({ setIsOpen, t, pin, setVerifiedPins, verifiedPins, id }) => {
  const [pinValue, setPinValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleVerifyPin = () => {
    if (pinValue === pin) {
      setVerifiedPins([...verifiedPins, id]);
      setIsOpen(false);
      setError(null);
    } else {
      setError(t("Invalid login password"));
    }
  };

  return (
    <Modal setIsOpen={setIsOpen} className={"dark:bg-opacity-0"}>
      <div className={"py-9 px-20 bg-white flex flex-col justify-center gap-4 items-between rounded-3xl text-center"} onClick={(e) => e.stopPropagation()}>
        <h1 className={"text-2xl text-semibold"}>{t("Type pin for event")}</h1>
        <Input className={"mt-8"} placeholder={"qwert123"} onChange={(e) => setPinValue(e.target.value)} value={pinValue}/>
        {error && <p className={"text-red"}>{t("Invalid login password")}</p>}
        <div className={"flex flex-col justify-center items-center gap-3"}>
          <Button className={"w-72 h-14"} onClick={() => handleVerifyPin()}>{t("Verify")}</Button>
          <p className={"text-base text-red font-semibold w-72 h-14 grid place-items-center cursor-pointer hover:bg-gray-light"} onClick={() => setIsOpen(false)}>{t("cancel")}</p>
        </div>
      </div>
    </Modal>
  );
};

export { EventPinModal };