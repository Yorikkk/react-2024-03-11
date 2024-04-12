import { useEffect, type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EntityId } from "@reduxjs/toolkit";

import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id";

import { Dish } from "../dish/component";

import styles from "./styles.module.scss";
import { State } from "../../types/state";
import { selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors";

export type Props = {
  restaurantId: EntityId
}

export const Dishes: FC<Props> = ({ restaurantId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-expect-error TODO: Непонятно как типизировать
    dispatch(getDishesByRestaurantId(restaurantId))
  }, [restaurantId])

  const restaurantDishIds = useSelector<State, EntityId[]>((state) => selectRestaurantDishIds(state, restaurantId)) || []

  if (! restaurantDishIds.length) {
    return null;
  }

  return (
    <ul className={styles.root}>
      {restaurantDishIds.map((dishId) => (
        <li key={dishId}>
          <Dish dishId={dishId} />
        </li>
      ))}
    </ul>
  );
};