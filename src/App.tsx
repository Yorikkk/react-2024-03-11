import { useState } from "react";

import { restaurants } from "./constants/mock";

import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { RestaurantTabs } from "./components/restaurant-tabs/component";
import { getStorageValue, setStorageValue } from "./utils/storage";
import { ACTIVE_RESTAURANT_INDEX_STORAGE_KEY, ACTIVE_THEME_STORAGE_KEY, DEFAULT_THEME } from "./constants/constants";
import { ThemeContext } from "./context/theme";
import { Themes } from "./types/styles";
import { User } from "./types/user";
import { UserContext } from "./context/user";

export const App = () => {
  const [user, setUser] = useState<User | null>(null)

  const [theme, setTheme] = useState(() => getStorageValue(ACTIVE_THEME_STORAGE_KEY) as Themes ?? DEFAULT_THEME)

  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(() => Number(getStorageValue(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY)) ?? 0);

  const activeRestaurant = restaurants[activeRestaurantIndex];

  return (
    <UserContext.Provider value={user}>
    <ThemeContext.Provider value={theme}>
      <Layout
        changeTheme={() => {
          const newTheme = theme === 'light' ? 'dark' : 'light'
          setStorageValue(ACTIVE_THEME_STORAGE_KEY, newTheme)
          setTheme(newTheme)
        }}
        changeUser={() => {
          setUser(user ? null : { name: 'Yury' })
        }}
      >
        <main className="main">
          <RestaurantTabs
            className="navigation"
            restaurants={restaurants}
            currentIndex={activeRestaurantIndex}
            onTabClick={(index: number) => {
              setStorageValue(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY, String(index))
              setActiveRestaurantIndex(index)
            }}
          />

          {activeRestaurant && <Restaurant restaurant={activeRestaurant} className="restaurant" /> }
        </main>
      </Layout>
    </ThemeContext.Provider>
    </UserContext.Provider>
  )
}