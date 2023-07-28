import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./commonSlice";

const reducer = {
  commonSlice,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
