import * as React from "react";

import styles from "./SearchBar.module.scss";

type Props = {
  onSearchValueChange: (value: string) => void;
};

const SearchBar = ({ onSearchValueChange }: Props) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        onChange={(e) => onSearchValueChange(e.target.value)}
        placeholder="Search..."
        type="text"
      />
      <button className={styles.btn} type="submit" />
    </div>
  );
};

export default SearchBar;
