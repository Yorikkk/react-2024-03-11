import { useState } from "react";

import { restaurants } from "./constants/mock";

import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { RestaurantTabs } from "./components/restaurant-tabs/component";
import { getStorageValue, setStorageValue } from "./utils/storage";
import { ACTIVE_RESTAURANT_INDEX_STORAGE_KEY, ACTIVE_THEME_STORAGE_KEY, DEFAULT_THEME } from "./constants/constants";
import { ThemeContext } from "./context/theme";
import { User } from "./types/user";
import { UserContext } from "./context/user";
import { isValidTheme } from "./guards/themes";

export const App = () => {
  const [user, setUser] = useState<User | null>(null)

  const [theme, setTheme] = useState(() => {
    const theme = getStorageValue(ACTIVE_THEME_STORAGE_KEY)

    return isValidTheme(theme) ? theme : DEFAULT_THEME
  })

  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(() => Number(getStorageValue(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY)) ?? 0);

  const activeRestaurant = restaurants[activeRestaurantIndex];

  return (
    <UserContext.Provider value={{
      user,
      onChange: () => {
        setUser(user ? null : { name: 'Yury' })
      }
    }}>
      <ThemeContext.Provider value={{
        theme,
        onChange: () => {
          const newTheme = theme === 'light' ? 'dark' : 'light'
          setStorageValue(ACTIVE_THEME_STORAGE_KEY, newTheme)
          setTheme(newTheme)
        }
      }}>
        <Layout>
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