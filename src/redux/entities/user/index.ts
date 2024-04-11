import { EntityId, EntityState, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { User } from "../../../types/user";
import { getUsers } from "./thunks/get-users";

export type UserState = EntityState<User, EntityId>

const entityAdapter = createEntityAdapter()

export const userSlice = createSlice({
  name: 'user',

  reducers: {},
  
  initialState: entityAdapter.getInitialState<UserState>({
    ids: [],
    entities: {}
  }),

  extraReducers: (builder) => {
    builder.addCase(
      getUsers.fulfilled,

      (state, { payload: users }) => {
        entityAdapter.setAll(state, users)
      }
    )
  }
});