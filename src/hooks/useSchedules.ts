import { useLocalStorage } from 'usehooks-ts';
import { SCHEDULE_KEY, type Schedule } from "../models/schedule";

export const useSchedules = () => {
    const [schedules] = useLocalStorage<Schedule[]>(SCHEDULE_KEY, []);

    return { schedules };
}