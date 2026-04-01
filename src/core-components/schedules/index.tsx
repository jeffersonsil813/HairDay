import { useState, type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../components/container";
import InputDate from "../../components/input-date";
import Text from "../../components/text";
import { getCurrentDate } from "../../utils/date";

const Schedules = () => {
  const { t } = useTranslation();
  const [date, setDate] = useState<string>(getCurrentDate());

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <Container size="md" className="w-full gap-8">
      <div className="flex gap-3">
        <div className="flex flex-col gap-1 flex-1">
          <Text variant="body-lg-bold" className="text-gray-100!">
            {t("schedule.title")}
          </Text>
          <Text className="text-gray-300!">{t("schedule.subtitle")}</Text>
        </div>
        <InputDate defaultValue={date} onChange={handleChangeDate} />
      </div>
    </Container>
  );
};

export default Schedules;
