import { PropsWithChildren, type FC } from "react";
import classNames from "classnames";

import { type Dish as IDish } from "../../types/dish"
import { Themes } from "../../types/types";

import styles from './styles.module.scss'

type Props = PropsWithChildren & {
  dish: IDish,
  theme: Themes
  className?: string
}

export const Dish: FC<Props> = ({ dish, theme, className, children }) => {
  const { name, price } = dish

  return (
    <div
      className={classNames(className, styles.root, styles[theme])} 
    >
      <div className={styles.preview}>
        <img src="/images/dish.webp" />
      </div>

      <div className={styles.description}>
        <h4 className={styles.title}>{name}</h4>

        <div className={styles.price}>Price: <span>{price} $</span></div>

        { children }
      </div>
    </div>
  )
}