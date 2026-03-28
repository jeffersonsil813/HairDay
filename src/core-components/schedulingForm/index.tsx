import { useTranslation } from "react-i18next";
import Container from "../../components/container";
import Text from "../../components/text";
import Header from "./header";

const SchedulingForm = () => {
  const { t } = useTranslation();

  return (
    <Container
      as="aside"
      size="sm"
      className="w-full gap-6 rounded-xl bg-gray-700 relative"
    >
      <Header />

      <form>
        <div className="flex flex-col space-y-1">
          <Text variant="body-lg-bold" className="text-gray-100!">{t("form.title")}</Text>
          <Text as="p" className="text-gray-300!">{t("form.subtitle")}</Text>
        </div>
      </form>
    </Container>
  );
};

export default SchedulingForm;
