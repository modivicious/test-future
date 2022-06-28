import * as React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store";
import { setStartIndex } from "../../store/reducers/bookSlice";
import { fetchBooks } from "../../store/reducers/actionCreators";

import ProductList from "../ProductList";

const BooksList = () => {
  const dispatch = useAppDispatch();

  const { totalItems, items: books } = useAppSelector(
    (state: RootState) => state.bookSlice.booksData
  );
  const currentItemsCount = useAppSelector(
    (state: RootState) => state.bookSlice.startIndex
  );
  const isFirstFetch = useAppSelector(
    (state: RootState) => state.bookSlice.isFirstFetch
  );
  const isFetching = useAppSelector(
    (state: RootState) => state.bookSlice.isFetching
  );

  const onLoadMore = () => {
    dispatch(setStartIndex(currentItemsCount + 30));
    dispatch(fetchBooks());
  };

  return (
    <ProductList
      books={books}
      totalItems={totalItems}
      currentItemsCount={currentItemsCount}
      isFirstFetch={isFirstFetch}
      isFetching={isFetching}
      onLoadMore={onLoadMore}
    />
  );
};

export default BooksList;
