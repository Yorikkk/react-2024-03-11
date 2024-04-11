import { EntityId } from "@reduxjs/toolkit";
import { State } from "../../../types/state";

export const selectDishState = (state: State) => state.dish;

export const selectDishIds = (state: State) => selectDishState(state).ids || null;
export const selectDishById = (state: State, id: EntityId) => selectDishState(state)?.entities[id] || null;