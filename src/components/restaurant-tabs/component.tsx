import { FC } from "react"
import { EntityId } from "@reduxjs/toolkit"
import classNames from "classnames"

import styles from "./styles.module.scss";
import { RestaurantTabContainer } from "../restaurant-tab/container";

type Props = {
  className?: string,
  restaurantIds: EntityId[],
  activeRestaurantId: EntityId | null,
  onTabClick: (restaurantId: EntityId) => void,
}

export const RestaurantTabs: FC<Props> = ({ restaurantIds, activeRestaurantId, onTabClick, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      {restaurantIds.map((restaurantId) => (
        <RestaurantTabContainer
          key={restaurantId}
          restaurantId={restaurantId}
          isActive={activeRestaurantId === restaurantId}
          onClick={() => onTabClick(restaurantId)}
        />
      ))}
    </div>
  )
}