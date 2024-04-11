import { FC } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";

import { RestaurantTab } from "../restaurant-tab/component";

import styles from "./styles.module.scss";
import { EntityId } from "@reduxjs/toolkit";

type Props = {
  className?: string,
  activeRestaurantId: EntityId | null,
  onTabClick: (restaurantId: EntityId) => void,
}

export const RestaurantTabs: FC<Props> = ({ activeRestaurantId, onTabClick, className }) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return (
    <div className={classNames(styles.root, className)}>
      {restaurantIds.map((restaurantId) => (
        <RestaurantTab 
          key={restaurantId}
          restaurantId={restaurantId}
          isActive={activeRestaurantId === restaurantId}
          onClick={() => onTabClick(restaurantId)}
        />
      ))}
    </div>
  )
}