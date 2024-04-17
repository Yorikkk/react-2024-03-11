import { type FC } from "react";
import classNames from "classnames";

import { type Restaurant as IRestaurant } from "../../types/restaurant";

import { Themes } from "../../types/types";
import { DishesContainer } from "../dishes/container";
import { ReviewsContainer } from "../reviews/container";

import styles from "./styles.module.scss";

type Props = {
  theme: Themes
  restaurant: IRestaurant,
  className?: string,
}

export const Restaurant: FC<Props> = ({ theme, restaurant, className }) => {
  const { name, menu } = restaurant;

  return (
    <div className={classNames(styles.root, className, styles[theme])}>
      <h2 className={styles.title}>{name}</h2>

      <h3 className={styles.subtitle}>Menu</h3>
      <DishesContainer restaurantId={restaurant.id} />

      {!! menu.length && (
        <div>
          <h3 className={styles.subtitle}>Reviews</h3>
          <ReviewsContainer restaurantId={restaurant.id} />
        </div>
      )}
    </div>
  )
};