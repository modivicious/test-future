import * as React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store";

import { fetchMoreBooks } from "../../store/reducers/actionCreators";

import ProductList from "../ProductList";

const BooksList = () => {
  const dispatch = useAppDispatch();

  const { totalItems, items: books } = useAppSelector(
    (state: RootState) => state.bookSlice.booksData
  );
  const itemsOnPage = useAppSelector(
    (state: RootState) => state.bookSlice.startIndex
  );
  const isFirstFetch = useAppSelector(
    (state: RootState) => state.bookSlice.isFirstFetch
  );
  const isFetching = useAppSelector(
    (state: RootState) => state.bookSlice.isFetching
  );
  const isMoreBooksFetching = useAppSelector(
    (state: RootState) => state.bookSlice.isMoreBooksFetching
  );

  const onLoadMore = () => {
    dispatch(fetchMoreBooks());
  };

  return (
    <ProductList
      books={books}
      totalItems={totalItems}
      itemsOnPage={itemsOnPage}
      isFirstFetch={isFirstFetch}
      isFetching={isFetching}
      isMoreBooksFetching={isMoreBooksFetching}
      onLoadMore={onLoadMore}
    />
  );
};

export default BooksList;
