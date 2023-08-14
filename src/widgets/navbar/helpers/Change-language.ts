import { i18n } from "i18next";

export const toggleLanguage = (i18nInstance: i18n) => {
  const newLanguage = i18nInstance.language === "en" ? "ru" : "en";
  i18nInstance.changeLanguage(newLanguage);
};