import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { notifyError } from "../../notifications";

import type { BooksDataType, AnyObjectType } from "../../types";
import { RootState } from "..";

const fetchBooksThunk = (type: string) =>
  createAsyncThunk<BooksDataType, void, { state: RootState }>(
    type,
    async (_: void, { getState }) => {
      try {
        const { bookSlice } = getState();

        const response = await axios
          .get(
            `https://www.googleapis.com/books/v1/volumes?q=${bookSlice.searchValue}+subject:${bookSlice.categorySelected}&orderBy=${bookSlice.sortSelected}&maxResults=30&startIndex=${bookSlice.startIndex}&key=${process.env.API_KEY}`
          )
          .then((res) => res.data);

        return response?.items ? response : { items: [], totalItems: 0 };
      } catch (err) {
        notifyError(err);

        return { items: [], totalItems: 0 };
      }
    }
  );

export const fetchBooks = fetchBooksThunk("books/fetchBooks");

export const fetchMoreBooks = fetchBooksThunk("books/fetchMoreBooks");

export const fetchBookById = createAsyncThunk<
  AnyObjectType,
  string | undefined
>("books/fetchBookById", async (bookId: string | undefined) => {
  try {
    const response = await axios
      .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then((res) => res.data);

    return response;
  } catch (err) {
    notifyError(err);

    return {};
  }
});
