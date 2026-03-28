import Container from "./components/container";
import Schedule from "./core-components/schedule";
import SchedulingForm from "./core-components/schedulingForm";
import "./i18n";

const App = () => {
  return (
    <Container as="main" className="flex flex-col md:flex-row gap-2">
      <SchedulingForm />
      <Schedule />
    </Container>
  );
};

export default App;
