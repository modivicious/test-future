import { SET_BOOKS } from "../constants";
import type { BooksDataType } from "../types";

export type SetBooksActionType = {
  type: typeof SET_BOOKS;
  payload: BooksDataType;
};

export const setBooks = (booksData: BooksDataType): SetBooksActionType => ({
  type: SET_BOOKS,
  payload: booksData,
});

export type ActionsTypes = SetBooksActionType;
