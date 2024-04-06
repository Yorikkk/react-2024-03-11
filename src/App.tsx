import { useMemo } from "react";

import { Layout } from "./components/layout/component";
import { ThemeContext } from "./context/theme";
import { UserContext } from "./context/user";
import { Restaurants } from "./components/restaurants/component";
import { useTheme } from "./hooks/theme";
import { useUser } from "./hooks/user";

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
          <Restaurants />
        </Layout>
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}