import { createAsyncThunk } from "@reduxjs/toolkit";

import { API_URL } from "../../../../constants";
import { State } from "../../../../types/state";

import { selectUserIds } from "../selectors";

export const getUsers = createAsyncThunk(
  "user/getUsers",

  async () => {
    const response = await fetch(`${API_URL}/api/users/`);

    return response.json()
  },

  {
    // TODO: Разобраться с конструкцией (getState() as State)
    condition: (_, { getState }) => ! selectUserIds(getState() as State)?.length
  }
);