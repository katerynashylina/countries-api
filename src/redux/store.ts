import { configureStore } from "@reduxjs/toolkit";
import regionReducer from './features/filterSlice';
import inputReducer from "./features/inputSlice";

export const store = configureStore({
  reducer: {
    regionReducer,
    inputReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;