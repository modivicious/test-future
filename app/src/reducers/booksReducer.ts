import { SET_BOOKS, SET_CATEGORY, SET_SORT } from "../constants";
import type { ActionsTypes } from "../actions/actionCreator";
import type { BooksDataType } from "../types";

type DefaultStateType = {
  booksData: BooksDataType;
  categorySelected: string;
  sortSelected: string;
};

const defaultState: DefaultStateType = {
  booksData: {
    items: [],
    totalItems: 0,
  },
  categorySelected: "",
  sortSelected: "relevance",
};

const booksReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        booksData: {
          items: action.payload.items,
          totalItems: action.payload.totalItems,
        },
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
    default:
      return state;
  }
};

export default booksReducer;
