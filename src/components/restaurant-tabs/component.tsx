import { FC } from "react";

import { Restaurant } from "../../types/restaurant";
import { Tab } from "../tab/component";
import classNames from "classnames";

import styles from "./styles.module.scss";

type Props = {
  className?: string,
  currentIndex: number,
  restaurants: Restaurant[],
  onTabClick: (index: number) => void,
}

export const RestaurantTabs: FC<Props> = ({ restaurants, currentIndex, onTabClick, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      {restaurants.map((restaurant, index) => (
        <Tab 
          title={restaurant.name}
          isActive={index === currentIndex}
          onClick={() => onTabClick(index)}
        />
      ))}
    </div>
  )
}