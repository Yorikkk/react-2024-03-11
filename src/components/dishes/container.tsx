import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { EntityId } from "@reduxjs/toolkit";

import { State } from "../../types/state";
import { useAppDispatch } from "../../redux";
import { selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id";

import { Dishes } from "./component";

export type Props = {
  restaurantId: EntityId
}

export const DishesContainer: FC<Props> = ({ restaurantId }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDishesByRestaurantId(restaurantId))
  }, [restaurantId])

  const restaurantDishIds = useSelector<State, EntityId[]>((state) => selectRestaurantDishIds(state, restaurantId)) || []

  return <Dishes restaurantDishIds={restaurantDishIds} />
};