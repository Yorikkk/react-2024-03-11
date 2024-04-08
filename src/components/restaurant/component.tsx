import { useContext, type FC } from "react";

import { type Restaurant as IRestaurant } from "../../types/restaurant";

import { Dishes } from "../dishes/component";
import { Reviews } from "../reviews/component";
import classNames from "classnames";

import styles from "./styles.module.scss";
import { ThemeContext } from "../../context/theme";

type Props = {
  restaurant: IRestaurant,
  className?: string,
}

export const Restaurant: FC<Props> = ({ restaurant, className }) => {
  const { theme} = useContext(ThemeContext);

  if (! restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div className={classNames(styles.root, className, styles[theme])}>
      <h2 className={styles.title}>{name}</h2>

      <h3 className={styles.subtitle}>Menu</h3>
      <Dishes dishes={menu} />

      {!! menu.length && (
        <div>
          <h3 className={styles.subtitle}>Reviews</h3>
          <Reviews reviews={reviews} />
        </div>
      )}
    </div>
  )
};