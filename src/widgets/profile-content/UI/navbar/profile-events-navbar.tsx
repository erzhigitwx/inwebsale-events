import React, { FC } from "react";

const ProfileEventsNavbar = () => {
  return (
    <div className="grid grid-cols-[0.3fr,1fr,1.2fr,0.8fr,1fr,1fr,1fr,1fr,1fr] gap-4 items-center text-gray text-medium text-base">
      <p>№</p>
      <p>Название</p>
      <p>Статус</p>
      <p>Начало</p>
      <p>Ведущий</p>
      <p>Модератор</p>
      <p>Доступ</p>
      <p>Чат</p>
      <p>Опции</p>
    </div>
  );
};

export { ProfileEventsNavbar };