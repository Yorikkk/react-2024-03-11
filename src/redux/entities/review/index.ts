import { EntityId, EntityState, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { Review } from "../../../types/review";

import { getReviewsByRestaurantId } from "./thunks/get-reviews-by-restaurant-id";

export type ReviewState = EntityState<Review, EntityId>

const entityAdapter = createEntityAdapter()

export const reviewSlice = createSlice({
  name: 'review',

  reducers: {},

  initialState: entityAdapter.getInitialState<ReviewState>({
    ids: [],
    entities: {}
  }),

  extraReducers: (builder) => 
    builder.addCase(
      getReviewsByRestaurantId.fulfilled,
      
      (state, { payload: reviews }) => {
        entityAdapter.upsertMany(state, reviews)
      }
    )
})