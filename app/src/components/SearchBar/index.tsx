import * as React from "react";

import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder="Search..." type="text" />
      <button className={styles.btn} type="submit" />
    </div>
  );
};

export default SearchBar;
