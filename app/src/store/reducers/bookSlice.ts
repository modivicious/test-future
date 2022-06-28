import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchBooks, fetchBookById } from "./actionCreators";
import type { BooksDataType, AnyObjectType } from "../../types";

interface IBookState {
  booksData: BooksDataType;
  isFetching: boolean;
  searchValue: string;
  categorySelected: string;
  sortSelected: string;
  startIndex: number;
  isFirstFetch: boolean;
  currentBook: AnyObjectType;
  isCurrentBookFetching: boolean;
}

const initialState: IBookState = {
  booksData: {
    items: [],
    totalItems: 0,
  },
  isFetching: false,
  searchValue: "",
  categorySelected: "",
  sortSelected: "relevance",
  startIndex: 0,
  isFirstFetch: true,
  currentBook: {},
  isCurrentBookFetching: false,
};

const bookSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    setSearchValue(state: IBookState, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setIsFetching(state: IBookState, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
    setCategorySelected(state: IBookState, action: PayloadAction<string>) {
      state.categorySelected = action.payload;
    },
    setSortSelected(state: IBookState, action: PayloadAction<string>) {
      state.sortSelected = action.payload;
    },
    setStartIndex(state: IBookState, action: PayloadAction<number>) {
      state.startIndex = action.payload;
    },
    setIsFirstFetch(state: IBookState, action: PayloadAction<boolean>) {
      state.isFirstFetch = action.payload;
    },
    clearBooks(state: IBookState) {
      state.booksData = {
        items: [],
        totalItems: 0,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchBooks.fulfilled,
      (state: IBookState, action: PayloadAction<BooksDataType>) => {
        state.booksData = {
          items: [...state.booksData.items, ...action.payload.items],
          totalItems: action.payload.totalItems,
        };
        state.isFetching = false;
      }
    );
    builder.addCase(
      fetchBookById.fulfilled,
      (state: IBookState, action: PayloadAction<AnyObjectType>) => {
        state.isCurrentBookFetching = false;
        state.currentBook = action.payload;
      }
    );
    builder.addCase(fetchBookById.pending, (state: IBookState) => {
      state.isCurrentBookFetching = true;
    });
  },
});

export const {
  setSearchValue,
  setIsFetching,
  setCategorySelected,
  setSortSelected,
  setStartIndex,
  setIsFirstFetch,
  clearBooks,
} = bookSlice.actions;

export default bookSlice.reducer;
