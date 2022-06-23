import axios from "axios";
import { ThunkAction } from "redux-thunk";
import type { RootState } from "../reducers";
import type { SetBooksActionType } from "../actions/actionCreator";

import { setBooks } from "./actionCreator";

// const APIKey = "AIzaSyCI0q4vW6no6jSTrzolojAIhNJO3k6cQKQ";

const getBooks = (
  searchQuery: string
): ThunkAction<Promise<void>, RootState, unknown, SetBooksActionType> => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=30&key=${process.env.API_KEY}`
    );
    dispatch(setBooks(response.data));
  };
};

export default getBooks;
