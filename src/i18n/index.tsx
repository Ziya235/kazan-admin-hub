import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../../public/locales/en.json";
import ru from "../../public/locales/ru.json";
import ch from "../../public/locales/chinese.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      ch: { translation: ch },
      ru: { translation: ru },
    },
  });

export default i18n;
