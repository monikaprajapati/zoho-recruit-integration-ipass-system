import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  // load translation using http -> see /public/locales
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // use en if detected lng is not available
    supportedLngs: ["en"], // add new languages over here
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
