import { useLocalStorage } from "usehooks-ts";
import { SCHEDULE_KEY, type Schedule } from "../models/schedule";

export const useSchedule = () => {
  const [schedules, setSchedules] = useLocalStorage<Schedule[]>(
    SCHEDULE_KEY,
    [],
  );

  const createSchedule = (newSchedule: Omit<Schedule, "id">) => {
    if (!schedules.some(({ dateTime }) => dateTime === newSchedule.dateTime)) {
      setSchedules([
        ...schedules,
        { ...newSchedule, id: Math.random().toString(36).slice(2, 9) },
      ]);
    }
  };

  const deleteSchedule = (id: string) => {
    setSchedules(schedules.filter((schedule) => schedule.id !== id));
  };

  return { createSchedule, deleteSchedule };
};
