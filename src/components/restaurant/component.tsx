import { useContext, type FC } from "react";

import { type Restaurant as IRestaurant } from "../../types/restaurant";

import { Dishes } from "../dishes/component";
import { Reviews } from "../reviews/component";
import classNames from "classnames";

import styles from "./styles.module.scss";
import { ThemeContext } from "../../context/theme";
import { useSelector } from "react-redux";
import { State } from "../../types/state";

type Props = {
  restaurantId: string,
  className?: string,
}

export const Restaurant: FC<Props> = ({ restaurantId, className }) => {
  const { theme } = useContext(ThemeContext);
  const restaurant = useSelector<State, IRestaurant>((state) => state.restaurant.entities?.[restaurantId]);

  if (! restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div className={classNames(styles.root, className, styles[theme])}>
      <h2 className={styles.title}>{name}</h2>

      <h3 className={styles.subtitle}>Menu</h3>
      <Dishes dishIds={menu} />

      {!! menu.length && (
        <div>
          <h3 className={styles.subtitle}>Reviews</h3>
          <Reviews reviewIds={reviews} />
        </div>
      )}
    </div>
  )
};