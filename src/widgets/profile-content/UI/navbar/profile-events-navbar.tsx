import React, { FC } from "react";

interface ProfileEventsNavbarProps {

}

const ProfileEventsNavbar: FC<ProfileEventsNavbarProps> = () => {
  return (
    <div className={"flex flex-row justify-start items-center gap-32"}>
      <div className={"flex flex-row justify-start items-center gap-6"}>
        <p className={"text-gray text-medium text-base"}>№</p>
        <p className={"text-gray text-medium text-base"}>Название</p>
      </div>
      <div className={"flex flex-row justify-start items-center gap-[20%]"}>
        <p className={"text-gray text-medium text-base"}>Статус</p>
        <p className={"text-gray text-medium text-base"}>Начало</p>
        <p className={"text-gray text-medium text-base"}>Ведущий</p>
        <p className={"text-gray text-medium text-base"}>Модератор</p>
        <p className={"text-gray text-medium text-base"}>Доступ</p>
        <p className={"text-gray text-medium text-base"}>Чат</p>
        <p className={"text-gray text-medium text-base"}>Опции</p>
      </div>
    </div>
  );
};

export { ProfileEventsNavbar };