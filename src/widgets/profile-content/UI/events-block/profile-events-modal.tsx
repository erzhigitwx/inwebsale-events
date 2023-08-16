import React, { FC } from "react";
// components
import { Button, Modal } from "@/shared/UI";
// helpers
import { handleDeleteEvent } from "@/widgets/profile-content/helpers/handle-delete-event";

interface ProfileEventsModalProps {
  setIsDeleteModal: (arg: boolean) => void
  id: string
}

const ProfileEventsModal: FC<ProfileEventsModalProps> = ({ setIsDeleteModal, id }) => {
  return (
    <Modal setIsOpen={setIsDeleteModal}>
      <div className={"py-9 px-20 bg-white flex flex-col justify-center gap-12 items-between rounded-3xl text-center"} onClick={(e) => e.stopPropagation()}>
        <h1 className={"text-2xl text-semibold"}>Вы действительно хотите удалить мероприятие?</h1>
        <div className={"flex flex-col justify-center items-center gap-3"}>
          <Button className={"w-72 h-14"} onClick={() => handleDeleteEvent(setIsDeleteModal, id)}>Да</Button>
          <p className={"text-base text-red font-semibold w-72 h-14 grid place-items-center cursor-pointer"} onClick={() => setIsDeleteModal(false)}>Отмена</p>
        </div>
      </div>
    </Modal>
  );
};

export { ProfileEventsModal };