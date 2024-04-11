import { EntityId, EntityState, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { Dish } from "../../../types/dish";
import { getDishesByRestaurantId } from "./thunks/get-dishes-by-restaurant-id";

export type DishState = EntityState<Dish, EntityId>

const entityAdapter = createEntityAdapter()

export const dishSlice = createSlice({
  name: 'dish',

  reducers: {},
  
  initialState: entityAdapter.getInitialState<DishState>({
    ids: [],
    entities: {}
  }),

  extraReducers: (builder) => {
    builder.addCase(
      getDishesByRestaurantId.fulfilled,

      (state, { payload: dishes }) => {
        entityAdapter.upsertMany(state, dishes)
      }
    )
  }
});