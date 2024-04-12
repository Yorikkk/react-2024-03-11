import { EntityId } from "@reduxjs/toolkit";

import { State } from "../../../types/state";

export const selectCartState = (state: State) => state.cart;

export const selectCartDishIds = (state: State) => Object.keys(selectCartState(state));
export const selectCartDishAmount = (state: State, dishId: EntityId) => selectCartState(state)?.[dishId] ?? 0