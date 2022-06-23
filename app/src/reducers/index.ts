import { combineReducers } from "redux";

import booksReducer from "./booksReducer";

const rootReducer = combineReducers({
  booksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
