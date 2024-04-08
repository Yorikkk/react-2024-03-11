import { createSlice } from "@reduxjs/toolkit";
import { Dish } from "../../../types/dish";
import { normalizedDishes } from "../../../constants/normalize-mock";

type DishEntities = Record<string, Dish>

export const dishSlice = createSlice({
  name: 'dish',
  reducers: {},
  initialState: {
    ids: normalizedDishes.map(({ id }) => id),
    entities: normalizedDishes.reduce((acc: DishEntities, dish) => {
      acc[dish.id] = dish;

      return acc;
    }, {}),
  },
});