import { EntityId, createSlice } from "@reduxjs/toolkit";

export type CartState = Record<EntityId, number>

const initialState: CartState = {}

export const cartSlice = createSlice({ 
  name: 'cart',

  reducers: {
    incrementDish: (state, { payload: dishId }: { payload: EntityId }) => {
      const amount = state[dishId] ?? 0;

      state[dishId] = amount + 1;
    },

    decrementDish: (state, { payload: dishId }: { payload: EntityId }) => {
      const amount = state[dishId] ?? 0;

      state[dishId] = amount - 1;

      if (state[dishId] <= 0) {
        delete state[dishId];
      }
    }
  },

  initialState,
})

export const { incrementDish, decrementDish } = cartSlice.actions