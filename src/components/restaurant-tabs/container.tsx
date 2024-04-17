import { FC } from "react";
import { useSelector } from "react-redux";
import { EntityId } from "@reduxjs/toolkit";

import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";

import { RestaurantTabs } from "./component";

type Props = {
  className?: string,
  activeRestaurantId: EntityId | null,
  onTabClick: (restaurantId: EntityId) => void,
}

export const RestaurantTabsContainer: FC<Props> = (props) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return <RestaurantTabs restaurantIds={restaurantIds} {...props} />
}