import { combineReducers } from "redux";

import books from "./booksReducer";

const rootReducer = combineReducers({
  books,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
