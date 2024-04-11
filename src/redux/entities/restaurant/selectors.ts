import { EntityId } from "@reduxjs/toolkit";
import { State } from "../../../types/state";

export const selectRestaurantState = (state: State) => state.restaurant;

export const selectRestaurantIds = (state: State) => selectRestaurantState(state)?.ids || null;
export const selectRestaurantById = (state: State, id: EntityId) => selectRestaurantState(state)?.entities[id] || null;

export const selectFirstRestaurantId = (state: State) => selectRestaurantIds(state)?.[0];

export const selectRestaurantReviewIds = (state: State, restaurantId: EntityId) => selectRestaurantById(state, restaurantId)?.reviews;
export const selectRestaurantDishIds = (state: State, restaurantId: EntityId) => selectRestaurantById(state, restaurantId)?.menu;