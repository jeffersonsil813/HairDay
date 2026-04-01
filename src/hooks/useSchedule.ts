import { useLocalStorage } from 'usehooks-ts';
import { SCHEDULE_KEY, type SCHEDULE } from "../models/schedule";

export const useSchedule = () => {
  const [schedules, setSchedules] = useLocalStorage<SCHEDULE[]>(
    SCHEDULE_KEY,
    [],
  );

  const createSchedule = (newSchedule: Omit<SCHEDULE, "id">) => {
    setSchedules([
      ...schedules,
      { ...newSchedule, id: Math.random().toString(36).slice(2, 9) },
    ]);
  };

  const deleteSchedule = (id: string) => {
    setSchedules(schedules.filter((schedule) => schedule.id !== id));
  };

  return { createSchedule, deleteSchedule };
};
