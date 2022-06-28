import * as React from "react";

import Loader from "../Loader";

import noPhoto from "../../../images/nophoto.svg";

import styles from "./ProductInfo.module.scss";

type Props = {
  imgLink: string;
  categories: string;
  title: string;
  authors: string;
  description: string;
  isFetching: boolean;
};

const ProductInfo = ({
  imgLink = noPhoto,
  categories = "",
  title = "",
  authors = "",
  description = "",
  isFetching,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        {!isFetching ? (
          <div className={styles.content}>
            <div className={styles.imgBox}>
              <img className={styles.img} src={imgLink} alt={title} />
            </div>
            <div className={styles.details}>
              <p className={styles.categories}>{categories}</p>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.authors}>{authors}</p>
              <p className={styles.descr}>{description}</p>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
