import { useMemo } from "react";

import { Layout } from "./components/layout/component";
import { RestaurantsContainer } from "./components/restaurants/container";
import { UserContext } from "./context/user";
import { ThemeContext } from "./context/theme";
import { useUser } from "./hooks/user";
import { useTheme } from "./hooks/theme";

export const App = () => {
  const { user, login, logout } = useUser();
  const { theme, toggleTheme } = useTheme();

  const userContext = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  );

  const themeContext = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <UserContext.Provider value={userContext}>
      <ThemeContext.Provider value={themeContext}>
        <Layout>
          <RestaurantsContainer />
        </Layout>
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}