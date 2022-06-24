import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import fetchBookById from "../../actions/fetchBookById";

import styles from "./ProductPage.module.scss";

const ProductPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(Object);

  useEffect(() => {
    fetchBookById(id, setBook);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.imgBox}>
            <img
              className={styles.img}
              src={
                book?.volumeInfo?.imageLinks?.medium ||
                book?.volumeInfo?.imageLinks?.small ||
                book?.volumeInfo?.imageLinks?.thumbnail
              }
              alt={book?.volumeInfo?.title}
            />
          </div>
          <div className={styles.details}>
            <p className={styles.categories}>
              {book.volumeInfo?.categories &&
                book.volumeInfo.categories.join(", ")}
            </p>
            <h1 className={styles.title}>{book?.volumeInfo?.title}</h1>
            <p className={styles.authors}>
              {book?.volumeInfo?.authors && book.volumeInfo.authors.join(", ")}
            </p>
            <p className={styles.descr}>{book?.volumeInfo?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
