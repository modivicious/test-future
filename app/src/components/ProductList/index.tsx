import * as React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store";
import { setStartIndex } from "../../store/reducers/bookSlice";
import { fetchBooks } from "../../store/reducers/actionCreators";

import ProductCard from "../ProductCard";
import Loader from "../Loader";

import styles from "./ProductList.module.scss";

const ProductList = () => {
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
    <div className={styles.wrapper}>
      <div className="container">
        {!isFetching ? (
          !isFirstFetch && (
            <div className={styles.content}>
              <p className={styles.totalItems}>Found {totalItems} results</p>
              <ul className={styles.productList}>
                {books.map((book) => (
                  <ProductCard
                    imageLink={book.volumeInfo?.imageLinks?.thumbnail}
                    title={book.volumeInfo.title}
                    categories={
                      book.volumeInfo.categories &&
                      book.volumeInfo.categories[0]
                    }
                    authors={
                      book.volumeInfo.authors &&
                      book.volumeInfo.authors.join(", ")
                    }
                    path={`/book/${book.id}`}
                  />
                ))}
              </ul>
              {currentItemsCount + 30 < totalItems && (
                <button
                  className={styles.loadBtn}
                  onClick={onLoadMore}
                  type="button"
                >
                  Load More
                </button>
              )}
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ProductList;
