import { useLocalStorage } from "usehooks-ts";
import { SCHEDULE_KEY, type Schedule } from "../models/schedule";

type Period = "morning" | "afternoon" | "night";

const PERIODS = {
  morning: { start: 9, end: 12 },
  afternoon: { start: 13, end: 18 },
  night: { start: 19, end: 21 },
};

export const useSchedules = () => {
  const [schedules] = useLocalStorage<Schedule[]>(SCHEDULE_KEY, []);

  const getHour = (dateTime: string) => new Date(dateTime).getHours();

  const filterByPeriod = (schedules: Schedule[], period: Period) => {
    const { start, end } = PERIODS[period];
    return schedules.filter(({ dateTime }) => {
      const hour = getHour(dateTime);
      return hour >= start && hour <= end;
    });
  };

  const getSchedulesByDate = (date: string) => {
    const filteredSchedules = schedules.filter(({ dateTime }) =>
      dateTime.startsWith(date),
    );

    return {
      morning: filterByPeriod(filteredSchedules, "morning"),
      afternoon: filterByPeriod(filteredSchedules, "afternoon"),
      night: filterByPeriod(filteredSchedules, "night"),
    };
  };

  const isTimeSlotAvailable = (date: string, time: string) => {
    const target = `${date}T${time}`;
    return !schedules.some(({ dateTime }) => dateTime.startsWith(target));
  };

  return { schedules, getSchedulesByDate, isTimeSlotAvailable };
};
