import { createSlice } from "@reduxjs/toolkit";

import { Restaurant } from "../../../types/restaurant";
import { normalizedRestaurants } from "../../../constants/normalize-mock";

type RestaurantEntities = Record<string, Restaurant>

export const restaurantSlice = createSlice({
  name: 'restaurant',
  reducers: {},
  initialState: {
    ids: normalizedRestaurants.map(({ id }) => id),
    entities: normalizedRestaurants.reduce((acc: RestaurantEntities, restaurant) => {
      acc[restaurant.id] = restaurant;

      return acc
    }, {}),
  },
})