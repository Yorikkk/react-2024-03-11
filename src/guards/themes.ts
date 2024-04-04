import { THEMES } from "../constants/constants";
import { Themes } from "../types/types";

export const isValidTheme = (str: string | null): str is Themes => 
  str !== null && str in THEMES