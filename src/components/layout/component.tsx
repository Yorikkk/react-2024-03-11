import { FC, PropsWithChildren, useContext } from "react";
import { Header } from "../header/header";

import style from "./styles.module.scss"
import { Footer } from "../footer/component";
import classNames from "classnames";
import { ThemeContext } from "../../context/theme";

type Props = PropsWithChildren & {
  changeUser: () => void,
  changeTheme: () => void,
}

export const Layout: FC<Props> = ({ children, changeTheme, changeUser }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={classNames(style.root, style[theme])}>
      <div className={style.main}>
        <Header 
          changeTheme={changeTheme} 
          changeUser={changeUser}
        />
  
        {children}
  
        <Footer />
      </div>
    </div>
  );
};