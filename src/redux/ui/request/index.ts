import { AsyncThunk, EntityId, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "./constants";

export type RequestState = Record<
  EntityId, 
  { 
    status: keyof typeof REQUEST_STATUSES,
    error?: unknown
  }
>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
  
type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;
type FulfilledAction = ReturnType<GenericAsyncThunk["fulfilled"]>;

const initialState: RequestState = {}

export const requestSlice = createSlice({
  name: 'request',

  initialState,

  reducers: {},

  extraReducers: (builder) => 
    builder.addMatcher<PendingAction>(
      ({ type }: { type: string }) => type.endsWith("/pending"),

      (state, { meta }) => {
        state[meta.requestId] = {
          status: REQUEST_STATUSES.pending
        }
      }
    ).addMatcher<RejectedAction>(
      ({ type }: { type: string }) => type.endsWith("/rejected"),

      (state, { meta, error }) => {
        state[meta.requestId] = {
          status: REQUEST_STATUSES.rejected,
          error
        }
      }
    ).addMatcher<FulfilledAction>(
      ({ type }: { type: string }) => type.endsWith("/fulfilled"),

      (state, { meta }) => {
        state[meta.requestId] = {
          status: REQUEST_STATUSES.fulfilled
        }
      }
    )
})