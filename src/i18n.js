import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import intervalPlural from "i18next-intervalplural-postprocessor";
import translationEN from "./locales/en/translation.json";
import translationZH from "./locales/zh/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  zh: {
    translation: translationZH,
  },
};

i18n.use(initReactI18next).use(intervalPlural).use(LanguageDetector).init({
  resources,
  lng: "zh",
  fallbackLng: "en",
});
