import { configureStore, combineReducers } from "@reduxjs/toolkit";

import bookSlice from "./reducers/bookSlice";

const rootReducer = combineReducers({
  bookSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
