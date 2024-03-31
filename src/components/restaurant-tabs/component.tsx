import { FC } from "react"

import { Restaurant } from "../../types/restaurant"
import { Tab } from "../tab/component"

type Props = {
  restaurants: Restaurant[],
  currentIndex: number,
  onTabClick: (index: number) => void
}

export const RestaurantTabs: FC<Props> = ({ restaurants, currentIndex, onTabClick }) => {
  return (
    <div>
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