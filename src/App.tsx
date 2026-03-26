import Button from "./components/button";
import Text from "./components/text";

const App = () => {
  return <div className="flex gap-2 justify-center items-center p-5 flex-col">
    <Text variant="body-lg-bold" className="text-gray-100!">HairDay</Text>
    <Button className="w-full">Teste</Button>
    <Button className="w-full" disabled>Teste 2</Button>
  </div>;
};

export default App;