import { FC, PropsWithChildren } from "react";
import { Header } from "../header/header";

import style from "./styles.module.scss"
import { Footer } from "../footer/component";

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className={style.root}>
    <div className={style.main}>
      <Header />

      {children}

      <Footer />
    </div>
  </div>
)