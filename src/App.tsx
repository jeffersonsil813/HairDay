import Container from "./components/container";
import Schedules from "./core-components/schedules";
import SchedulingForm from "./core-components/schedulingForm";
import "./i18n";

const App = () => {
  return (
    <Container as="main" className="flex flex-col md:flex-row gap-2">
      <SchedulingForm />
      <Schedules />
    </Container>
  );
};

export default App;
