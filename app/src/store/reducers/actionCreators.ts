import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { notifyError } from "../../notifications";

import { BooksDataType } from "../../types";
import { RootState } from "..";

export const fetchBooks = createAsyncThunk<
  BooksDataType,
  void,
  { state: RootState }
>("books/fetchBooks", async (_: void, { getState }) => {
  try {
    const { bookSlice } = getState();

    const response = await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookSlice.searchValue}+subject:${bookSlice.categorySelected}&orderBy=${bookSlice.sortSelected}&maxResults=30&startIndex=${bookSlice.startIndex}&key=${process.env.API_KEY}`
      )
      .then((res) => res.data);

    return response;
  } catch (err) {
    notifyError(err);
  }
});

export const fetchBookById = async (
  bookId: string | undefined,
  setBook: (response: Object) => void
) => {
  try {
    const response = await axios
      .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then((res) => res.data);

    setBook(response);
  } catch (err) {
    notifyError(err);
  }
};
