import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AfternoonIcon from "../../assets/icons/CloudSun.svg?react";
import NightIcon from "../../assets/icons/MoonStars.svg?react";
import MorningIcon from "../../assets/icons/SunHorizon.svg?react";
import TrashIcon from "../../assets/icons/Trash.svg?react";
import ButtonIcon from "../../components/button-icon";
import Icon from "../../components/icon";
import Text from "../../components/text";
import { useSchedule } from "../../hooks/useSchedule";
import { useSchedules } from "../../hooks/useSchedules";
import type { Schedule } from "../../models/schedule";
import { getHourFromDateTime } from "../../utils/date";

interface SchedulesPerPeriod {
  periodIcon: React.FC<React.ComponentProps<"svg">>;
  periodLabel: string;
  period: string;
  schedulesData: Schedule[];
}

interface SchedulesListProps {
  scheduleDate: string;
}

const SchedulesList = ({ scheduleDate }: SchedulesListProps) => {
  const { t } = useTranslation();
  const { getSchedulesByDate } = useSchedules();
  const { deleteSchedule } = useSchedule();

  const handleDeleteSchedule = (scheduleId: string) => {
    deleteSchedule(scheduleId);
  };

  const schedulesPerPeriod: SchedulesPerPeriod[] = [
    {
      periodIcon: MorningIcon,
      periodLabel: t("schedule.periods.morning"),
      period: "09h-12h",
      schedulesData: getSchedulesByDate(scheduleDate).morning,
    },
    {
      periodIcon: AfternoonIcon,
      periodLabel: t("schedule.periods.afternoon"),
      period: "13h-18h",
      schedulesData: getSchedulesByDate(scheduleDate).afternoon,
    },
    {
      periodIcon: NightIcon,
      periodLabel: t("schedule.periods.night"),
      period: "19h-21h",
      schedulesData: getSchedulesByDate(scheduleDate).night,
    },
  ];

  const AnimatedButtonIcon = motion(ButtonIcon);

  return (
    <div className="flex flex-col gap-3">
      {schedulesPerPeriod.map(
        ({ periodIcon, periodLabel, period, schedulesData }) => (
          <div key={periodLabel} className="border border-gray-600 rounded-lg">
            <div className="flex gap-3 py-3 px-5 border-b border-gray-600 items-center">
              <Icon svg={periodIcon} className="fill-yellow w-5 h-5" />
              <Text className="text-gray-300!">{periodLabel}</Text>
              <Text variant="body-md" className="text-gray-400! ml-auto">
                {period}
              </Text>
            </div>

            <div className="flex flex-col gap-0.5 p-5">
              {schedulesData.length > 0 ? (
                schedulesData.map(({ id: scheduleId, dateTime, client }) => (
                  <div key={scheduleId} className="flex py-1 gap-5">
                    <Text variant="body-md-bold" className="text-gray-200!">
                      {getHourFromDateTime(dateTime)}
                    </Text>
                    <Text variant="body-md" className="text-gray-200!">
                      {client}
                    </Text>
                    <AnimatedButtonIcon
                      svg={TrashIcon}
                      onClick={() => handleDeleteSchedule(scheduleId)}
                      className="ml-auto"
                      animate={{ rotate: 0 }}
                      whileHover={{ rotate: [0, -10, 10, -6, 6, 0] }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                ))
              ) : (
                <Text className="text-gray-300!">
                  {t("schedule.empty_state")}
                </Text>
              )}
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default SchedulesList;
