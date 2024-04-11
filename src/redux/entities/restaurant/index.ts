import { EntityId, EntityState, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { Restaurant } from "../../../types/restaurant";

import { getRestaurants } from "./thunks/get-restaurants";

export type RestaurantState = EntityState<Restaurant, EntityId>

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: 'restaurant',

  reducers: {},
  
  initialState: entityAdapter.getInitialState<RestaurantState>({
    ids: [],
    entities: {}
  }),

  extraReducers: (builder) => 
    builder.addCase(
      getRestaurants.fulfilled,

      (state, { payload: restaurants }) => {
        entityAdapter.setAll(state, restaurants)
      }
    )
})