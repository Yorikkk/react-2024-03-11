import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { dishSlice } from "./entities/dish";
import { restaurantSlice } from "./entities/restaurant";
import { userSlice } from "./entities/user";
import { reviewSlice } from "./entities/review";

export const store = configureStore({
  reducer: combineSlices(
    dishSlice,
    userSlice,
    reviewSlice,
    restaurantSlice,
  )
});