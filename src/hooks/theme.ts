import { useCallback, useState } from "react";
import { getStorageValue, setStorageValue } from "../utils/storage";
import { isValidTheme } from "../guards/themes";
import { ACTIVE_THEME_STORAGE_KEY, DEFAULT_THEME } from "../constants/constants";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const theme = getStorageValue(ACTIVE_THEME_STORAGE_KEY)

    return isValidTheme(theme) ? theme : DEFAULT_THEME;
  });

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setStorageValue(ACTIVE_THEME_STORAGE_KEY, newTheme);
    setTheme(newTheme);
  }, [theme])

  return {
    theme,
    toggleTheme
  }
}