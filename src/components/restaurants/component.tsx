import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import classNames from "classnames"

import { getUsers } from "../../redux/entities/user/thunks/get-users"
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants"
import { selectFirstRestaurantId } from "../../redux/entities/restaurant/selectors"
import { ACTIVE_RESTAURANT_ID_STORAGE_KEY } from "../../constants/constants"
import { getStorageValue, setStorageValue } from "../../utils/storage"

import { Restaurant } from "../restaurant/component"
import { RestaurantTabs } from "../restaurant-tabs/component"

import style from './styles.module.scss';

export const Restaurants = () => {
  const restaurantId = useSelector(selectFirstRestaurantId);

  const [activeRestaurantId, setActiveRestaurantId] = useState(() => getStorageValue(ACTIVE_RESTAURANT_ID_STORAGE_KEY) ?? restaurantId);

  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-expect-error TODO: Непонятно как типизировать
    dispatch(getRestaurants());

    // @ts-expect-error TODO: Непонятно как типизировать
    dispatch(getUsers());
  }, [])

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