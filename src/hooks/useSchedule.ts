import useLocalStorage from "use-local-storage";
import { SCHEDULE_KEY, type SCHEDULE } from "../models/schedule";

export const useSchedule = () => {
  const [schedules, setSchedule] = useLocalStorage<SCHEDULE[]>(
    SCHEDULE_KEY,
    [],
  );

  const createSchedule = (newSchedule: Omit<SCHEDULE, "id">) => {
    setSchedule([
      ...schedules,
      { ...newSchedule, id: Math.random().toString(36).slice(2, 9) },
    ]);
  };

  const deleteSchedule = (id: string) => {
    setSchedule(schedules.filter((schedule) => schedule.id !== id));
  };

  return { createSchedule, deleteSchedule };
};
