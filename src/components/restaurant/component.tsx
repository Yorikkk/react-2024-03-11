import { useContext, type FC } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { State } from "../../types/state";
import { ThemeContext } from "../../context/theme";
import { type Restaurant as IRestaurant } from "../../types/restaurant";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

import { Dishes } from "../dishes/component";
import { Reviews } from "../reviews/component";

import styles from "./styles.module.scss";
import { EntityId } from "@reduxjs/toolkit";

type Props = {
  restaurantId: EntityId,
  className?: string,
}

export const Restaurant: FC<Props> = ({ restaurantId, className }) => {
  const { theme } = useContext(ThemeContext);
  const restaurant = useSelector<State, IRestaurant>((state) => selectRestaurantById(state, restaurantId));

  if (! restaurant) {
    return null;
  }

  const { name, menu } = restaurant;

  return (
    <div className={classNames(styles.root, className, styles[theme])}>
      <h2 className={styles.title}>{name}</h2>

      <h3 className={styles.subtitle}>Menu</h3>
      <Dishes restaurantId={restaurantId} />

      {!! menu.length && (
        <div>
          <h3 className={styles.subtitle}>Reviews</h3>
          <Reviews restaurantId={restaurantId} />
        </div>
      )}
    </div>
  )
};