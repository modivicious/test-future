import {
  SET_BOOKS,
  SET_IS_FETCHING,
  SET_SEARCH_VALUE,
  SET_CATEGORY,
  SET_SORT,
  SET_START_INDEX,
  SET_IS_FIRST_FETCH,
  CLEAR_BOOKS,
} from "../constants";
import type { ActionsTypes } from "../actions/actionCreator";
import type { BooksDataType } from "../types";

type DefaultStateType = {
  booksData: BooksDataType;
  isFetching: boolean;
  searchValue: string;
  categorySelected: string;
  sortSelected: string;
  startIndex: number;
  isFirstFetch: boolean;
};

const defaultState: DefaultStateType = {
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
};

const booksReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        booksData: {
          items: [...state.booksData.items, ...(action.payload.items || [])],
          totalItems: action.payload.totalItems,
        },
        isFetching: false,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        categorySelected: action.payload,
      };
    case SET_SORT:
      return {
        ...state,
        sortSelected: action.payload,
      };
    case SET_START_INDEX:
      return {
        ...state,
        startIndex: action.payload,
      };
    case SET_IS_FIRST_FETCH:
      return {
        ...state,
        isFirstFetch: action.payload,
      };
    case CLEAR_BOOKS:
      return {
        ...state,
        booksData: {
          items: [],
          totalItems: 0,
        },
      };
    default:
      return state;
  }
};

export default booksReducer;
