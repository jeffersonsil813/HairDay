import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import type { TranslationSchema } from "./locales/en";
import { en } from "./locales/en";
import { pt } from "./locales/pt";

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: TranslationSchema;
    };
  }
}

export default i18n;
