import { FC } from "react";

import { RestaurantTab } from "../restaurant-tab/component";
import classNames from "classnames";

import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { State } from "../../types/state";

type Props = {
  className?: string,
  activeRestaurantId: string | null,
  onTabClick: (restaurantId: string) => void,
}

export const RestaurantTabs: FC<Props> = ({ activeRestaurantId, onTabClick, className }) => {
  const restaurantIds = useSelector<State, string[]>((state) => state.restaurant.ids);

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