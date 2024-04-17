import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { State } from "../../types/state";
import { getUsers } from "../../redux/entities/user/thunks/get-users";
import { useAppDispatch } from "../../redux";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { selectIsRequestPending } from "../../redux/ui/request/selector";
import { selectFirstRestaurantId } from "../../redux/entities/restaurant/selectors";
import { getStorageValue, setStorageValue } from "../../utils/storage";
import { ACTIVE_RESTAURANT_ID_STORAGE_KEY } from "../../constants/constants";

import { Restaurants } from "./component";
import { RestaurantSkeleton } from "./skeleton";

export const RestaurantsContainer = () => {
  const [requestId, setRequestId] = useState<string | null>()

  const isLoading = useSelector((state: State) => requestId && selectIsRequestPending(state, requestId))

  const restaurantId = useSelector(selectFirstRestaurantId);

  const [activeRestaurantId, setActiveRestaurantId] = useState(() => getStorageValue(ACTIVE_RESTAURANT_ID_STORAGE_KEY) ?? restaurantId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const request = dispatch(getRestaurants());
    setRequestId(request.requestId);

    return () => {
      request.abort();
      setRequestId(null)
    }
  }, [])

  useEffect(() => {
    dispatch(getUsers());
  }, [])

  if (isLoading) {
    return <RestaurantSkeleton />;
  }

  return <Restaurants 
    activeRestaurantId={activeRestaurantId}
    onTabClick={(restaurantId) => {
      setStorageValue(ACTIVE_RESTAURANT_ID_STORAGE_KEY, String(restaurantId))
      setActiveRestaurantId(restaurantId)
    }}
  />
}