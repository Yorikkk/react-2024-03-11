import { State } from "../../../types/state";

export const selectUserState = (state: State) => state.user;

export const selectUserIds = (state: State) => selectUserState(state).ids || null;
export const selectUserById = (state: State, id: string) => selectUserState(state)?.entities[id] || null;