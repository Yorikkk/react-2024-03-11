import { EntityId, createAsyncThunk } from "@reduxjs/toolkit";

import { State } from "../../../../types/state";
import { API_URL } from "../../../../constants";

import { selectRestaurantReviewIds } from "../../restaurant/selectors";

import { selectReviewIds } from "../selectors";
import { Review } from "../../../../types/review";

export const getReviewsByRestaurantId = createAsyncThunk<Review[], EntityId>(
  "review/getReviewsByRestaurantId",

  async (restaurantId: EntityId) => {
    const response = await fetch(`${API_URL}/api/reviews?restaurantId=${restaurantId}`);

    return response.json();
  },

  {
    condition: (restaurantId: EntityId, { getState }) => {
      const state = getState() as State

      const restaurantReviewIds = selectRestaurantReviewIds(state, restaurantId);
      const reviewIds = selectReviewIds(state);

      return restaurantReviewIds.some((reviewId) => ! reviewIds.includes(reviewId))
    }
  }
)