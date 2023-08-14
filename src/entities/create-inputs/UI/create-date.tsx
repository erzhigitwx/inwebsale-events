import React, { FC } from "react";
import { $eventDate, $eventTime, eventDataChanged, eventTimeChanged } from "@/entities/create-inputs/model/date";
import { useStore } from "effector-react";
import { TFunction } from "i18next";

interface CreateDateProps {
  t: TFunction;
}

const CreateDate: FC<CreateDateProps> = ({ t }) => {
  const date: string = useStore($eventDate);
  const time: string = useStore($eventTime);
  return (
    <div className={"mt-8 flex flex-col justify-start items-start gap-2"}>
      <h3 className={"prose dark:prose-darkMode"}>{t("Start date and time")}</h3>
      <div className={"flex flex-row justify-between items-between gap-5"}>
        <input
          type="date"
          value={date}
          onChange={(e) => eventDataChanged(e.target.value)}
          className={"py-4 px-5 border-2 rounded-xl border-blue prose dark:bg-dark-blue-light dark:prose-darkMode dark:border-white"}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => eventTimeChanged(e.target.value)}
          className={"py-4 px-5 border-2 rounded-xl border-blue prose dark:bg-dark-blue-light dark:prose-darkMode dark:border-white"}
        />
      </div>
    </div>
  );
};

export { CreateDate };