import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../types/user";
import { normalizedUsers } from "../../../constants/normalize-mock";

type UserEntities = Record<string, User>

export const userSlice = createSlice({
  name: 'user',
  reducers: {},
  initialState: {
    ids: normalizedUsers.map(({ id }) => id),
    entites: normalizedUsers.reduce((acc: UserEntities, user) => {
      acc[user.id] = user;

      return acc;
    }, {})
  },
});