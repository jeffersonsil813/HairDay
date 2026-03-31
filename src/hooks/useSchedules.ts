import useLocalStorage from "use-local-storage";
import { SCHEDULE_KEY, type SCHEDULE } from "../models/schedule";

export const useSchedules = () => {
    const [schedules] = useLocalStorage<SCHEDULE[]>(SCHEDULE_KEY, []);

    return { schedules };
}