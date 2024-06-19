import { configureStore } from "@reduxjs/toolkit";
import regionReducer from './features/filterSlice';

export const store = configureStore({
  reducer: {
    regionReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;