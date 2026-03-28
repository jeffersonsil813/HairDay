import Logo from "../../assets/images/Logo.svg?react";
import Container from "../../components/container";
import TranslationIconButton from "./translationIconButton";

const Header = () => {
  return (
    <Container as="header" className="flex justify-between items-center absolute left-0 right-0 top-0">
      <div className="gap-2 px-5 py-3 rounded-br-xl bg-gray-600 flex items-center justify-center -translate-6">
        <Logo className="w-24.75 h-8" />
      </div>
      <TranslationIconButton />
    </Container>
  );
};

export default Header;
