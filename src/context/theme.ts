import React from "react";
import { DEFAULT_THEME } from "../constants/constants";
import { Themes } from "../types/types";

type Context = {
  theme: Themes,
  onChange: () => void
}

export const ThemeContext = React.createContext<Context>({
  theme: DEFAULT_THEME,
  onChange: () => {}
});