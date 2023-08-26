import React, { FC } from "react";
import { useTranslation } from "react-i18next";
// components
import { Button, Modal } from "@/shared/UI";
// helpers
import { handleDeleteEvent } from "@/shared/UI/event/helpers/handle-delete-event";
// types
import { TFunction } from "i18next";

interface EventModalProps {
  setIsDeleteModal: (arg: boolean) => void
  id: string
}

const EventModal: FC<EventModalProps> = ({ setIsDeleteModal, id }) => {
  const { t }: {t: TFunction } = useTranslation("profile");

  return (
    <Modal setIsOpen={setIsDeleteModal} className={"dark:bg-opacity-0"}>
      <div className={"px-10 py-9 lg:px-20 mx-4 lg:mx-0 bg-white flex flex-col justify-center gap-12 items-between rounded-3xl text-center"} onClick={(e) => e.stopPropagation()}>
        <h1 className={"text-2xl text-semibold"}>{t("sure to delete")}</h1>
        <div className={"flex flex-col justify-center items-center gap-3"}>
          <Button className={"w-72 h-14"} onClick={() => handleDeleteEvent(setIsDeleteModal, id)}>{t("yes")}</Button>
          <p className={"text-base text-red font-semibold w-72 h-14 grid place-items-center cursor-pointer hover:bg-gray-light"} onClick={() => setIsDeleteModal(false)}>{t("cancel")}</p>
        </div>
      </div>
    </Modal>
  );
};

export { EventModal };