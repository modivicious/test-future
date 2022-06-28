import * as React from "react";

import ProductCard from "../ProductCard";
import Button from "../Button";
import Loader from "../Loader";

import { AnyObjectType } from "../../types";

import styles from "./ProductList.module.scss";

type Props = {
  books: AnyObjectType[];
  totalItems: number;
  currentItemsCount: number;
  isFirstFetch?: boolean;
  isFetching?: boolean;
  onLoadMore: () => void;
};

const ProductList = ({
  books,
  totalItems,
  currentItemsCount,
  isFirstFetch = false,
  isFetching = false,
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
              {currentItemsCount + 30 < totalItems && (
                <Button onClick={onLoadMore} type="button">
                  Load More
                </Button>
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
