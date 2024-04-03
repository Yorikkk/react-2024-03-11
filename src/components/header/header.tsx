import { FC, useContext } from "react";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import { ThemeContext } from "../../context/theme";
import { UserContext } from "../../context/user";

type Props = {
  changeUser: () => void,
  changeTheme: () => void,
}

export const Header: FC<Props> = ({ changeTheme, changeUser }) => {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <header className={styles.root}>
      <h1 className={styles.title}>Restaurants</h1>

      <div className={styles.actions}>
        {user && <Button viewVariant="secondary" size="l">{user.name}</Button>}

        <Button viewVariant="secondary" size="l" onClick={changeUser}>
          { user ? 'Sign out' : 'Sign in' }
        </Button>

        <ThemeContext.Provider value="light">
          <Button viewVariant="secondary" size="l" onClick={changeTheme}>
            { theme === 'light' ? <>&#9790;</> : <>&#9728;</> }
          </Button>
        </ThemeContext.Provider>
      </div>
    </header>
  )
}