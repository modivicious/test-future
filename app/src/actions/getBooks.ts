import axios from "axios";
import { ThunkAction } from "redux-thunk";
import type { RootState } from "../reducers";
import type { SetBooksActionType } from "../actions/actionCreator";

import { setBooks } from "./actionCreator";

const getBooks = (
  searchQuery: string
): ThunkAction<Promise<void>, RootState, unknown, SetBooksActionType> => {
  return async (dispatch, getState) => {
    const { booksReducer } = getState();
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}+subject:${booksReducer.categorySelected}&orderBy=${booksReducer.sortSelected}&maxResults=30&key=${process.env.API_KEY}`
    );
    dispatch(setBooks(response.data));
  };
};

export default getBooks;
