import React, { FC, useState } from "react";
// store
import { filterEventsFx } from "@/shared/UI/event/model";
// hooks
import { useTranslation } from "react-i18next";
import { useEventsFetching } from "@/shared/hooks/useEventsFetching";
// components
import { Events, Input } from "@/shared/UI";
// helpers
import { changeHandler } from "@/shared/utils/change-handler";

const EventsPageContent: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const { isFetched } = useEventsFetching();
  const { t } = useTranslation("profile");

  // searching logic (an effector)
  filterEventsFx(searchValue);

  return (
    <div className={"flex flex-col gap-2"}>
      <Input
        placeholder={t("Search for event")}
        value={searchValue}
        onChange={(e) => changeHandler(e, setSearchValue)}
      />
      <Events isProfile={false} t={t} isFetched={isFetched}/>
    </div>
  );
};

export { EventsPageContent };