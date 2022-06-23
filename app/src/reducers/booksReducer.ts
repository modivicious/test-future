import { SET_BOOKS } from "../constants";
import type { ActionsTypes } from "../actions/actionCreator";
import type { BooksDataType } from "../types";

type DefaultStateType = {
  booksData: BooksDataType;
};

const defaultState: DefaultStateType = {
  booksData: {
    items: [],
    totalItems: 0,
  },
};

const books = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        booksData: {
          items: action.payload.items,
          totalItems: action.payload.totalItems,
        },
      };
    default:
      return state;
  }
};

export default books;
