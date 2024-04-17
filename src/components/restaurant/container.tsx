import { FC, useContext } from "react";
import { useSelector } from "react-redux";
import { EntityId } from "@reduxjs/toolkit";

import { State } from "../../types/state";
import { ThemeContext } from "../../context/theme";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { type Restaurant as IRestaurant } from "../../types/restaurant";

import { Restaurant } from "./component";

type Props = {
  restaurantId: EntityId,
  className?: string,
}

export const RestaurantContainer: FC<Props> = ({ restaurantId, className }) => {
  const { theme } = useContext(ThemeContext);
  const restaurant = useSelector<State, IRestaurant>((state) => selectRestaurantById(state, restaurantId));

  if (! restaurant) {
    return null;
  }

  return <Restaurant 
    theme={theme}
    className={className}
    restaurant={restaurant} 
  />
};