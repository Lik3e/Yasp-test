import { configureStore } from "@reduxjs/toolkit";
import { dataApi } from "../features/data.api";
import dataReducer from "../features/data.slise";

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,

    dataState: dataReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
        dataApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const STORE = { store }

export default STORE
