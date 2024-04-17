import { FC } from "react"
import { useSelector } from "react-redux"
import { EntityId } from "@reduxjs/toolkit"


import { State } from "../../types/state"
import { Restaurant } from "../../types/restaurant"
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors"

import { Tab } from "../tab/component"

type Props = {
  isActive: boolean,
  restaurantId: EntityId,
  onClick: () => void
}

export const RestaurantTabContainer: FC<Props> = ({ restaurantId, ...props }) => {
  const restaurant = useSelector<State, Restaurant>((state) => selectRestaurantById(state, restaurantId));

  if (! restaurant) {
    return null;
  }

  const { name } = restaurant;

  return <Tab {...props} text={name} />
}