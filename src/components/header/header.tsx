import { useContext } from "react";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import { ThemeContext } from "../../context/theme";
import { UserContext } from "../../context/user";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, login, logout } = useContext(UserContext);

  return (
    <header className={styles.root}>
      <h1 className={styles.title}>Restaurants</h1>

      <div className={styles.actions}>
        {user && <span>{user.name}</span>}

        <Button viewVariant="secondary" size="l" onClick={() => user ? logout() : login()}>
          { user ? 'Sign out' : 'Sign in' }
        </Button>

        <ThemeContext.Provider value={{ theme: 'light' }}>
          <Button viewVariant="secondary" size="l" onClick={toggleTheme}>
            { theme === 'light' ? <>&#9790;</> : <>&#9728;</> }
          </Button>
        </ThemeContext.Provider>
      </div>
    </header>
  )
}