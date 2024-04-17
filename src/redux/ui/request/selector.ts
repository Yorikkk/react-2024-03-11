import { State } from "../../../types/state";
import { REQUEST_STATUSES } from "./constants";

export const selectRequestModule = (state: State) => state.request;

export const selectIsRequestPending = (state: State, requestId: string) => 
  selectRequestModule(state)[requestId]?.status === REQUEST_STATUSES.pending

export const selectIsRequestFulfilled= (state: State, requestId: string) => 
  selectRequestModule(state)[requestId]?.status === REQUEST_STATUSES.fulfilled

export const selectIsRequestRejected = (state: State, requestId: string) => 
  selectRequestModule(state)[requestId]?.status === REQUEST_STATUSES.rejected

export const selectIsRequestError = (state: State, requestId: string) => 
  selectRequestModule(state)[requestId]?.error