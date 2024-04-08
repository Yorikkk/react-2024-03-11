import { useState } from "react"
import classNames from "classnames"

import { ACTIVE_RESTAURANT_ID_STORAGE_KEY } from "../../constants/constants"
import { getStorageValue, setStorageValue } from "../../utils/storage"
import { RestaurantTabs } from "../restaurant-tabs/component"
import { Restaurant } from "../restaurant/component"

import style from './stles.module.scss'
import { useSelector } from "react-redux"
import { State } from "../../types/state"

export const Restaurants = () => {
  const restaurantId = useSelector<State, string | null>((state) => state.restaurant.ids?.[0] ?? null)

  const [activeRestaurantId, setActiveRestaurantId] = useState(() => getStorageValue(ACTIVE_RESTAURANT_ID_STORAGE_KEY) ?? restaurantId);

  return (
    <div className={classNames(style.root)}>
      <RestaurantTabs
        className="navigation"
        activeRestaurantId={activeRestaurantId}
        onTabClick={(restaurantId) => {
          setStorageValue(ACTIVE_RESTAURANT_ID_STORAGE_KEY, String(restaurantId))
          setActiveRestaurantId(restaurantId)
        }}
      />

      {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} className="restaurant" /> }
    </div>
  )
}