import { Themes } from "../types/types";

export const ACTIVE_RESTAURANT_INDEX_STORAGE_KEY = 'currentRestaurantIndex'
export const ACTIVE_THEME_STORAGE_KEY = 'activeThemeIndex'

export const THEMES = ['light', 'dark'] as const
export const DEFAULT_THEME: Themes = 'light'

export const MIN_COUNTER_VALUE = 0;
export const MAX_COUNTER_VALUE = 5;