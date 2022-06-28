import * as React from "react";
import { Link } from "react-router-dom";

import noPhoto from "../../../images/nophoto.svg";

import styles from "./ProductCard.module.scss";

type Props = {
  imageLink: string;
  title: string;
  categories: string;
  authors: string;
  path: string;
};

const ProductCard = ({
  imageLink = noPhoto,
  title = "",
  categories = "",
  authors = "",
  path = "",
}: Props) => {
  return (
    <article className={styles.card}>
      <Link className={styles.link} to={path}>
        <img className={styles.img} src={imageLink} alt={title} />
        <p className={`${styles.category} cutTextWithNoWrap`}>{categories}</p>
        <h2 className={`${styles.title} cutTextIntoTwoLines`}>{title}</h2>
        <p className={`${styles.authors} cutTextWithNoWrap`}>{authors}</p>
      </Link>
    </article>
  );
};

export default ProductCard;
