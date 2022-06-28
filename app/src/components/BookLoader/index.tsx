import * as React from "react";

import styles from "./BookLoader.module.scss";

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.loader} />
      <span className={styles.label}>Loading...</span>
    </div>
  );
};

export default Loader;
