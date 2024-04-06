import { FC, PropsWithChildren, useContext } from "react";
import { Header } from "../header/header";

import style from "./styles.module.scss"
import { Footer } from "../footer/component";
import classNames from "classnames";
import { ThemeContext } from "../../context/theme";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classNames(style.root, style[theme])}>
      <div className={style.wrapper}>
        <Header />
  
        {children}
  
        <Footer />
      </div>
    </div>
  );
};