import { combineSlices, configureStore } from "@reduxjs/toolkit";

import { dishSlice } from "./entities/dish";
import { restaurantSlice } from "./entities/restaurant";
import { userSlice } from "./entities/user";
import { reviewSlice } from "./entities/review";
import { cartSlice } from "./ui/cart";

export const store = configureStore({
  reducer: combineSlices(
    cartSlice,
    dishSlice,
    userSlice,
    reviewSlice,
    restaurantSlice,
  ),

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});