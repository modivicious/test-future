import * as React from "react";
import { useSelector } from "react-redux";
import useAppDispatch from "../../hooks/useAppDispatch";

import { setStartIndex } from "../../actions/actionCreator";
import fetchBooks from "../../actions/fetchBooks";

import ProductCard from "../ProductCard";
import Loader from "../Loader";

import styles from "./ProductList.module.scss";

const ProductList = () => {
  const dispatch = useAppDispatch();

  const { totalItems, items: books } = useSelector(
    (state: any) => state.booksReducer.booksData
  );
  const currentItemsCount = useSelector(
    (state: any) => state.booksReducer.startIndex
  );
  const isFirstFetch = useSelector(
    (state: any) => state.booksReducer.isFirstFetch
  );
  const isFetching = useSelector((state: any) => state.booksReducer.isFetching);

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
