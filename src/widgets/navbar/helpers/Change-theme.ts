import { theme } from "@/shared/types/types";

export const changeTheme = (theme: theme, setTheme: (arg: theme) => void): void => {
  const selectedTheme: theme = theme === "dark" ? "light" : "dark";
  setTheme(selectedTheme);
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", selectedTheme);
  }
};