import { useContext } from "react";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import { ThemeContext } from "../../context/theme";
import { UserContext } from "../../context/user";

export const Header = () => {
  const themeContext = useContext(ThemeContext);
  const userContext = useContext(UserContext);

  const { theme } = themeContext
  const { user } = userContext

  return (
    <header className={styles.root}>
      <h1 className={styles.title}>Restaurants</h1>

      <div className={styles.actions}>
        {user && <Button viewVariant="secondary" size="l">{user.name}</Button>}

        <Button viewVariant="secondary" size="l" onClick={userContext.onChange}>
          { user ? 'Sign out' : 'Sign in' }
        </Button>

        <ThemeContext.Provider value={{
           ...themeContext, 
           theme: 'light' 
        }}>
          <Button viewVariant="secondary" size="l" onClick={themeContext.onChange}>
            { theme === 'light' ? <>&#9790;</> : <>&#9728;</> }
          </Button>
        </ThemeContext.Provider>
      </div>
    </header>
  )
}