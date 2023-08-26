import I18n from "@/shared/lib/i18next/i18n";

export const toggleLanguage = (i18n: typeof I18n) => {
  const currentLanguage = i18n.language;
  const newLanguage = currentLanguage === "en" ? "ru" : "en";
  i18n.changeLanguage(newLanguage);
};