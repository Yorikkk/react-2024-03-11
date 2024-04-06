import { createSlice } from "@reduxjs/toolkit";
import { Review } from "../../../types/review";
import { normalizedReviews } from "../../../constants/normalize-mock";

type ReviewEntities = Record<string, Review>

export const reviewSlice = createSlice({
  name: 'review',
  reducers: {},
  initialState: {
    ids: normalizedReviews.map(({ id }) => id),
    entities: normalizedReviews.reduce((acc: ReviewEntities, review) => {
      acc[review.id] = review;

      return acc;
    }, {})
  },
})