import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <header>Рестораны</header>

    {children}

    <footer>2024</footer>
  </div>
)