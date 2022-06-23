import * as React from "react";

import styles from "./SearchBar.module.scss";

type Props = {
  setSearchValue: (e: string) => void;
};

const SearchBar = ({ setSearchValue }: Props) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
        type="text"
      />
      <button className={styles.btn} type="submit" />
    </div>
  );
};

export default SearchBar;
