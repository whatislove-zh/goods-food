import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "./apiConfig";
import { foodReducer } from "./features/getFoodSlice";

export const store = configureStore({
  reducer: {
    bestFood: foodReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
