import { SET_BOOKS, SET_CATEGORY, SET_SORT } from "../constants";
import type { BooksDataType } from "../types";

export type SetBooksActionType = {
  type: typeof SET_BOOKS;
  payload: BooksDataType;
};

export const setBooks = (booksData: BooksDataType): SetBooksActionType => ({
  type: SET_BOOKS,
  payload: booksData,
});

export type SetCategorySelectedType = {
  type: typeof SET_CATEGORY;
  payload: string;
};

export const setCategorySelected = (
  category: string
): SetCategorySelectedType => ({
  type: SET_CATEGORY,
  payload: category,
});

export type SetSortSelectedType = {
  type: typeof SET_SORT;
  payload: string;
};

export const setSortSelected = (sort: string): SetSortSelectedType => ({
  type: SET_SORT,
  payload: sort,
});

export type ActionsTypes =
  | SetBooksActionType
  | SetCategorySelectedType
  | SetSortSelectedType;
