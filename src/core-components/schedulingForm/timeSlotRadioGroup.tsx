import { cva } from "class-variance-authority";
import { useTranslation } from "react-i18next";
import Text from "../../components/text";
import type { ChangeEvent } from "react";

interface Period {
  label: string;
  slots: string[];
}

export const slotVariants = cva(
  "flex items-center justify-center w-fit py-2 px-5 rounded-lg transition-colors",
  {
    variants: {
      available: {
        true: "bg-gray-600 border border-gray-500 hover:bg-gray-500 cursor-pointer",
        false: "bg-transparent border border-gray-600 pointer-events-none",
      },
      selected: {
        true: "bg-gray-600 border border-yellow pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      available: true,
      selected: false,
    },
  },
);

const slotTextVariants = cva("transition-colors", {
  variants: {
    available: { true: "text-gray-200!", false: "text-gray-500!" },
    selected: { true: "text-yellow!", false: "" },
  },
  defaultVariants: { available: true, selected: false },
});

interface TimeSlotRadioGroupProps {
  disabled?: boolean;
  handleChangeTime: (e: ChangeEvent<HTMLInputElement>) => void;
  selectedTime: string;
}

const TimeSlotRadioGroup = ({ disabled, handleChangeTime, selectedTime }: TimeSlotRadioGroupProps) => {
  const { t } = useTranslation();

  const periods: Period[] = [
    {
      label: t("schedule.periods.morning"),
      slots: ["09:00", "10:00", "11:00", "12:00"],
    },
    {
      label: t("schedule.periods.afternoon"),
      slots: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
    },
    {
      label: t("schedule.periods.night"),
      slots: ["19:00", "20:00", "21:00"],
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <Text variant="body-md-bold" className="text-gray-200!">
        {t("form.labels.hours")}
      </Text>

      {periods.map((period) => (
        <div key={period.label} className="flex flex-col gap-3">
          <Text variant="body-md" className="text-gray-300!">
            {period.label}
          </Text>
          <div className="flex flex-wrap items-center gap-2">
            {period.slots.map((slot) => (
              <label
                key={slot}
                className={slotVariants({
                  available: !disabled,
                  selected: selectedTime === slot,
                })}
              >
                <input
                  type="radio"
                  name="time-slot"
                  value={slot}
                  checked={selectedTime === slot}
                  onChange={handleChangeTime}
                  className="sr-only"
                />
                <Text
                  variant="body-md"
                  className={slotTextVariants({
                    available: !disabled,
                    selected: selectedTime === slot,
                  })}
                >
                  {slot}
                </Text>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeSlotRadioGroup;
