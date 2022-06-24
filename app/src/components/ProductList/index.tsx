import * as React from "react";
import { useSelector } from "react-redux";
import useAppDispatch from "../../hooks/useAppDispatch";

import { setStartIndex } from "../../actions/actionCreator";
import fetchBooks from "../../actions/fetchBooks";

import ProductCard from "../ProductCard";

import styles from "./ProductList.module.scss";

const ProductList = () => {
  const dispatch = useAppDispatch();

  const { totalItems, items: books } = useSelector(
    (state: any) => state.booksReducer.booksData
  );
  const currentItemsCount = useSelector(
    (state: any) => state.booksReducer.startIndex
  );

  const onLoadMore = () => {
    dispatch(setStartIndex(currentItemsCount + 30));
    dispatch(fetchBooks());
  };

  return (
    !!totalItems && (
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.content}>
            <p className={styles.productAmount}>Found {totalItems} results</p>
            <ul className={styles.productList}>
              {books.map((book) => (
                <ProductCard bookInfo={book.volumeInfo} />
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
        </div>
      </div>
    )
  );
};

export default ProductList;
