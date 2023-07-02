import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadFood = createAsyncThunk(
  "@@food/best",
  (food, { extra: { client, api } }) => {
    return client.get(api[food]);
  }
);

const initialState = {
  status: "idle",
  list: [],
  error: "null",
};

const getFoodSlice = createSlice({
  name: "@@food",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadFood.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadFood.fulfilled, (state, action) => {
        state.status = "received";
        state.error = null;
        state.list = action.payload.data;
      })
      .addCase(loadFood.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error || action.meta.error;
      });
  },
});

export const foodReducer = getFoodSlice.reducer;

//selectors
export const selectFoodInfo = (state) => ({
  status: state.bestFood.status,
  error: state.bestFood.error,
  list: state.bestFood.list,
});
