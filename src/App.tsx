import Button from "./components/button";
import Container from "./components/container";
import Text from "./components/text";

const App = () => {
  return (
    <Container as="main" className="">
      <Text variant="body-lg-bold" className="text-gray-100!">
        HairDay
      </Text>
      <Button className="w-full">Teste</Button>
      <Button className="w-full" disabled>
        Teste 2
      </Button>
    </Container>
  );
};

export default App;
