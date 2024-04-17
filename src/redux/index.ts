import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { cartSlice } from "./ui/cart";
import { dishSlice } from "./entities/dish";
import { userSlice } from "./entities/user";
import { reviewSlice } from "./entities/review";
import { requestSlice } from "./ui/request";
import { restaurantSlice } from "./entities/restaurant";

export const store = configureStore({
  reducer: combineSlices(
    cartSlice,
    dishSlice,
    userSlice,
    reviewSlice,
    requestSlice,
    restaurantSlice,
  ),

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;