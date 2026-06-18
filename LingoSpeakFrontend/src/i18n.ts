import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import vi from "./locales/vi.json";

const savedLanguage =
  typeof window !== "undefined" ? window.localStorage.getItem("lng") : null;
const supportedLngs = ["en", "vi"];
const initialLanguage =
  savedLanguage && supportedLngs.includes(savedLanguage) ? savedLanguage : "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
  },
  lng: initialLanguage,
  fallbackLng: "en",
  supportedLngs,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
