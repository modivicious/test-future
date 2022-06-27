import axios from "axios";
import { ThunkAction } from "redux-thunk";

import type { RootState } from "../reducers";
import type { SetBooksType } from "./actionCreator";

import { setBooks } from "./actionCreator";

import { notifyError } from "../notifications";

const fetchBooks = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  SetBooksType
> => {
  return async (dispatch, getState) => {
    try {
      const { booksReducer } = getState();

      const response = await axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${booksReducer.searchValue}+subject:${booksReducer.categorySelected}&orderBy=${booksReducer.sortSelected}&maxResults=30&startIndex=${booksReducer.startIndex}&key=${process.env.API_KEY}`
        )
        .then((res) => res.data);

      dispatch(setBooks(response));
    } catch (err) {
      notifyError(err);
    }
  };
};

export default fetchBooks;
