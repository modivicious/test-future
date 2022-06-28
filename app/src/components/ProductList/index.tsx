import * as React from "react";

import ProductCard from "../ProductCard";
import Button from "../Button";
import BookLoader from "../BookLoader";
import SpinLoader from "../SpinLoader";

import { AnyObjectType } from "../../types";

import styles from "./ProductList.module.scss";

type Props = {
  books: AnyObjectType[];
  totalItems: number;
  itemsOnPage: number;
  isFirstFetch?: boolean;
  isFetching?: boolean;
  isMoreBooksFetching?: boolean;
  onLoadMore: () => void;
};

const ProductList = ({
  books,
  totalItems,
  itemsOnPage,
  isFirstFetch = false,
  isFetching = false,
  isMoreBooksFetching = false,
  onLoadMore,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        {!isFetching ? (
          !isFirstFetch && (
            <div className={styles.content}>
              <p className={styles.totalItems}>Found {totalItems} results</p>
              <ul className={styles.productList}>
                {books.map((book, index) => (
                  <ProductCard
                    key={book.id + index}
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
              {itemsOnPage + 30 < totalItems &&
                (!isMoreBooksFetching ? (
                  <Button onClick={onLoadMore} type="button">
                    Load More
                  </Button>
                ) : (
                  <SpinLoader />
                ))}
            </div>
          )
        ) : (
          <BookLoader />
        )}
      </div>
    </div>
  );
};

export default ProductList;
