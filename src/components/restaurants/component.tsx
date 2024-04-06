import { useState } from "react"
import classNames from "classnames"

import { ACTIVE_RESTAURANT_INDEX_STORAGE_KEY } from "../../constants/constants"
import { getStorageValue, setStorageValue } from "../../utils/storage"
import { RestaurantTabs } from "../restaurant-tabs/component"
import { Restaurant } from "../restaurant/component"
import { restaurants } from "../../constants/mock"

import style from './stles.module.scss'

export const Restaurants = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(() => Number(getStorageValue(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY)) ?? 0);

  const activeRestaurant = restaurants[activeRestaurantIndex];

  return (
    <div className={classNames(style.root)}>
      <RestaurantTabs
        className="navigation"
        restaurants={restaurants}
        currentIndex={activeRestaurantIndex}
        onTabClick={(index: number) => {
          setStorageValue(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY, String(index))
          setActiveRestaurantIndex(index)
        }}
      />

      {activeRestaurant && <Restaurant restaurant={activeRestaurant} className="restaurant" /> }
    </div>
  )
}