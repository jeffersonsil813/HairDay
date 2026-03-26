import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  return {
    toggleLanguage,
    isPt: i18n.language === "pt",
    isEn: i18n.language === "en",
  };
};
