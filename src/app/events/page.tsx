import React, { FC } from "react";
import { EventsPageContent } from "@/widgets/events-page-content/events-page-content";

interface EventsProps {

}

const Events: FC<EventsProps> = () => {
  return (
    <div>
      <EventsPageContent />
    </div>
  );
};

export default Events;