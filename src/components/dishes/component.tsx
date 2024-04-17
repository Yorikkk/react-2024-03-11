import { type FC } from "react";
import { EntityId } from "@reduxjs/toolkit";

import { DishContaier } from "../dish/container";

import styles from "./styles.module.scss";

export type Props = {
  restaurantDishIds: EntityId[]
}

export const Dishes: FC<Props> = ({ restaurantDishIds }) => {
  if (! restaurantDishIds.length) {
    return null;
  }

  return (
    <ul className={styles.root}>
      {restaurantDishIds.map((dishId) => (
        <li key={dishId}>
          <DishContaier dishId={dishId} />
        </li>
      ))}
    </ul>
  );
};