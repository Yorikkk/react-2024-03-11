import { createAsyncThunk } from "@reduxjs/toolkit";

import { API_URL } from "../../../../constants";
import { selectRestaurantIds } from "../selectors";
import { State } from "../../../../types/state";
import { Restaurant } from "../../../../types/restaurant";

export const getRestaurants = createAsyncThunk<Restaurant[]>(
  'restaurant/getRestaurants',

  async () => {
    const response = await fetch(`${API_URL}/api/restaurants/`);

    return response.json();
  },

  {
    // TODO: Разобраться с конструкцией (getState() as State)
    condition: (_, { getState }) => ! selectRestaurantIds(getState() as State)?.length
  }
);