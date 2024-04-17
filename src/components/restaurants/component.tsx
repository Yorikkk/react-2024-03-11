import { FC } from "react"
import { EntityId } from "@reduxjs/toolkit"
import classNames from "classnames";

import { RestaurantContainer } from "../restaurant/container";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";

import style from './styles.module.scss';

type Props = {
  activeRestaurantId: EntityId,
  onTabClick: (restaurantId: EntityId) => void
}

export const Restaurants: FC<Props> = ({ activeRestaurantId, onTabClick }) => {
  return (
    <div className={classNames(style.root)}>
      <RestaurantTabsContainer
        className="navigation"
        activeRestaurantId={activeRestaurantId}
        onTabClick={onTabClick}
      />

      {activeRestaurantId && (
        <RestaurantContainer 
          restaurantId={activeRestaurantId} 
          className="restaurant" 
        /> 
      )}
    </div>
  )
}