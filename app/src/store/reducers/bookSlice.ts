import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchBooks, fetchMoreBooks, fetchBookById } from "./actionCreators";
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
  isMoreBooksFetching: boolean;
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
  isMoreBooksFetching: false,
};

const bookSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    setSearchValue(state: IBookState, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategorySelected(state: IBookState, action: PayloadAction<string>) {
      state.categorySelected = action.payload;
    },
    setSortSelected(state: IBookState, action: PayloadAction<string>) {
      state.sortSelected = action.payload;
    },
    setIsFirstFetch(state: IBookState, action: PayloadAction<boolean>) {
      state.isFirstFetch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchBooks.fulfilled,
      (state: IBookState, action: PayloadAction<BooksDataType>) => {
        state.isFetching = false;
        state.booksData = {
          items: action.payload.items,
          totalItems: action.payload.totalItems,
        };
        state.startIndex = 0;
      }
    );
    builder.addCase(fetchBooks.pending, (state: IBookState) => {
      state.isFetching = true;
    });
    builder.addCase(fetchBooks.rejected, (state: IBookState) => {
      state.isFetching = false;
    });

    builder.addCase(
      fetchMoreBooks.fulfilled,
      (state: IBookState, action: PayloadAction<BooksDataType>) => {
        state.isMoreBooksFetching = false;
        state.booksData = {
          items: [...state.booksData.items, ...action.payload.items],
          totalItems: action.payload.totalItems,
        };
        state.startIndex += 30;
      }
    );
    builder.addCase(fetchMoreBooks.pending, (state: IBookState) => {
      state.isMoreBooksFetching = true;
    });
    builder.addCase(fetchMoreBooks.rejected, (state: IBookState) => {
      state.isMoreBooksFetching = false;
    });

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
    builder.addCase(fetchBookById.rejected, (state: IBookState) => {
      state.isCurrentBookFetching = false;
    });
  },
});

export const {
  setSearchValue,
  setCategorySelected,
  setSortSelected,
  setIsFirstFetch,
} = bookSlice.actions;

export default bookSlice.reducer;
