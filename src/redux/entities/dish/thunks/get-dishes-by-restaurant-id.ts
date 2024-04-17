import { EntityId, createAsyncThunk } from "@reduxjs/toolkit";
import { Dish } from "../../../../types/dish";
import { API_URL } from "../../../../constants";
import { State } from "../../../../types/state";
import { selectRestaurantDishIds } from "../../restaurant/selectors";
import { selectDishIds } from "../selectors";

export const getDishesByRestaurantId = createAsyncThunk<Dish[], EntityId>(
  "dish/getDishesByRestaurantId",

  async (restaurantId: EntityId) => {
    const response = await fetch(`${API_URL}/api/dishes?restaurantId=${restaurantId}`);

    return response.json()
  },

  {
    condition: (restaurantId: EntityId, { getState }) => {
      const state = getState() as State;

      const restaurantDishIds = selectRestaurantDishIds(state, restaurantId);
      const dishIds = selectDishIds(state);

      return restaurantDishIds.some(dishId => ! dishIds.includes(dishId))
    }
  }
)