import { EntityId } from "@reduxjs/toolkit";

import { State } from "../../../types/state";

export const selectReviewState = (state: State) => state.review;

export const selectReviewIds = (state: State) => selectReviewState(state).ids || null;
export const selectReviewById = (state: State, id: EntityId) => selectReviewState(state)?.entities[id] || null;