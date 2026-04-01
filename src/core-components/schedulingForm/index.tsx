import { useState, type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import UserIcon from "../../assets/icons/UserSquare.svg?react";
import Button from "../../components/button";
import Container from "../../components/container";
import InputDate from "../../components/input-date";
import InputText from "../../components/input-text";
import Text from "../../components/text";
import { useSchedule } from "../../hooks/useSchedule";
import type { SCHEDULE } from "../../models/schedule";
import Header from "./header";
import TimeSlotRadioGroup from "./timeSlotRadioGroup";

const SchedulingForm = () => {
  const { t } = useTranslation();
  const { createSchedule } = useSchedule();
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [client, setClient] = useState<string>("");

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    setTime("");
  };

  const handleChangeTime = (e: ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handleChangeClient = (e: ChangeEvent<HTMLInputElement>) => {
    setClient(e.target.value);
  };

  const clearForm = () => {
    setDate("");
    setTime("");
    setClient("");
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const schedule: Omit<SCHEDULE, "id"> = {
      datetime: `${date}T${time}`,
      client,
    };

    createSchedule(schedule);
    clearForm();
  };

  return (
    <Container
      as="aside"
      size="sm"
      className="w-full gap-6 rounded-xl bg-gray-700 relative"
    >
      <Header />

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col space-y-1">
          <Text variant="body-lg-bold" className="text-gray-100!">
            {t("form.title")}
          </Text>
          <Text as="p" className="text-gray-300!">
            {t("form.subtitle")}
          </Text>
        </div>

        <div className="flex flex-col gap-2">
          <Text variant="body-md-bold" className="text-gray-200!">
            {t("form.labels.date")}
          </Text>
          <InputDate required onChange={handleChangeDate} />
        </div>

        <TimeSlotRadioGroup
          disabled={!date}
          handleChangeTime={handleChangeTime}
          selectedTime={time}
        />

        <div className="flex flex-col gap-2">
          <Text variant="body-md-bold" className="text-gray-200!">
            {t("form.labels.client")}
          </Text>
          <InputText
            svg={UserIcon}
            name="client"
            placeholder={t("form.placeholders.client")}
            required
            disabled={!date || !time}
            onChange={handleChangeClient}
          />
        </div>

        <Button type="submit" disabled={!date || !time || !client}>
          {t("form.submit_button")}
        </Button>
      </form>
    </Container>
  );
};

export default SchedulingForm;
