import { createContext } from "react";
import { Themes } from "../types/types";
import { DEFAULT_THEME } from "../constants/constants";

type Context = {
  theme: Themes,
  toggleTheme?: () => void
}

export const ThemeContext = createContext<Context>({
  theme: DEFAULT_THEME,
  toggleTheme: () => {}
});