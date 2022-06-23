import * as React from "react";

import styles from "./ProductCard.module.scss";

type Props = {
  bookInfo: {
    imageLinks: {
      thumbnail: string;
    };
    title: string;
    categories: string[];
    authors: string[];
  };
};

const ProductCard = ({ bookInfo }: Props) => {
  return (
    <article className={styles.card}>
      <a className={styles.link} href="#">
        <img
          className={styles.img}
          src={bookInfo.imageLinks.thumbnail || ""}
          alt={bookInfo?.title}
        />
        <p className={styles.category}>
          {bookInfo.categories && bookInfo.categories[0]}
        </p>
        <h2 className={styles.name}>{bookInfo?.title}</h2>
        <p className={styles.authors}>
          {bookInfo.authors && bookInfo.authors.join(", ")}
        </p>
      </a>
    </article>
  );
};

export default ProductCard;
