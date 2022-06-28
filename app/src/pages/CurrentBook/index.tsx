import * as React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store";
import { fetchBookById } from "../../store/reducers/actionCreators";

import ProductInfo from "../../components/ProductInfo";

const CurrentBook = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const book = useAppSelector(
    (state: RootState) => state.bookSlice.currentBook
  );
  const isFetching = useAppSelector(
    (state: RootState) => state.bookSlice.isCurrentBookFetching
  );

  useEffect(() => {
    dispatch(fetchBookById(id));
  }, []);

  useEffect(() => {
    document.title = book?.volumeInfo?.title || "React Books";
  }, [book]);

  return (
    <ProductInfo
      imgLink={
        book?.volumeInfo?.imageLinks?.medium ||
        book?.volumeInfo?.imageLinks?.small ||
        book?.volumeInfo?.imageLinks?.thumbnail
      }
      categories={
        book?.volumeInfo?.categories && book.volumeInfo.categories.join(", ")
      }
      title={book?.volumeInfo?.title}
      authors={book?.volumeInfo?.authors && book.volumeInfo.authors.join(", ")}
      description={book?.volumeInfo?.description}
      isFetching={isFetching}
    />
  );
};

export default CurrentBook;
