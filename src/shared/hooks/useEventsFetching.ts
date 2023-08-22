import { useEffect, useState } from "react";
import { fetchEventsFx, resetEvents } from "@/shared/UI/event/model";

const useEventsFetching = (): { isFetched: boolean } => {
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    fetchEventsFx("events").finally(() => setIsFetched(true));
    return () => {
      resetEvents();
    };
  }, []);

  return {
    isFetched
  };
};

export { useEventsFetching };