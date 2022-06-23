import * as React from "react";
import { useSelector } from "react-redux";

import ProductCard from "../ProductCard";

import styles from "./ProductList.module.scss";

const ProductList = () => {
  const { totalItems, items: books } = useSelector(
    (state: any) => state.booksReducer.booksData
  );

  return (
    !!totalItems && (
      <div className={styles.wrapper}>
        <div className="container">
          <p className={styles.productAmount}>Found {totalItems} results</p>
          <ul className={styles.productList}>
            {books.map((book) => (
              <ProductCard bookInfo={book.volumeInfo} />
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default ProductList;