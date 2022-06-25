import {
  SET_BOOKS,
  SET_SEARCH_VALUE,
  SET_CATEGORY,
  SET_SORT,
  SET_START_INDEX,
  SET_IS_FIRST_FETCH,
  CLEAR_BOOKS,
  SET_IS_FETCHING,
} from "../constants";
import type { BooksDataType } from "../types";

export type SetBooksType = {
  type: typeof SET_BOOKS;
  payload: BooksDataType;
};

export const setBooks = (booksData: BooksDataType): SetBooksType => ({
  type: SET_BOOKS,
  payload: booksData,
});

export type SetIsFetchingType = {
  type: typeof SET_IS_FETCHING;
  payload: boolean;
};

export const setIsFetching = (bool: boolean): SetIsFetchingType => ({
  type: SET_IS_FETCHING,
  payload: bool,
});

export type SetSearchValueType = {
  type: typeof SET_SEARCH_VALUE;
  payload: string;
};

export const setSearchValue = (value: string): SetSearchValueType => ({
  type: SET_SEARCH_VALUE,
  payload: value,
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

export type SetStartIndexType = {
  type: typeof SET_START_INDEX;
  payload: number;
};

export const setStartIndex = (index: number): SetStartIndexType => ({
  type: SET_START_INDEX,
  payload: index,
});

export type SetIsFirstFetchType = {
  type: typeof SET_IS_FIRST_FETCH;
  payload: boolean;
};

export const setIsFirstFetch = (bool: boolean): SetIsFirstFetchType => ({
  type: SET_IS_FIRST_FETCH,
  payload: bool,
});

export type ClearBooksType = {
  type: typeof CLEAR_BOOKS;
  payload: [];
};

export const clearBooks = (): ClearBooksType => ({
  type: CLEAR_BOOKS,
  payload: [],
});

export type ActionsTypes =
  | SetBooksType
  | SetIsFetchingType
  | SetCategorySelectedType
  | SetSortSelectedType
  | SetStartIndexType
  | SetIsFirstFetchType
  | ClearBooksType;
