import * as React from "react";

import SearchBar from "../SearchBar";
import Select from "../Select";

import styles from "./Search.module.scss";

const filtersData = [
  {
    id: "categories",
    label: "categories",
    options: [
      { name: "all", value: "all" },
      { name: "art", value: "art" },
      { name: "biography", value: "biography" },
      { name: "computers", value: "computers" },
      { name: "history", value: "history" },
      { name: "medical", value: "medical" },
      { name: "poetry", value: "poetry" },
    ],
  },
  {
    id: "sort",
    label: "sorting by",
    options: [
      { name: "relevance", value: "relevance" },
      { name: "newest", value: "newest" },
    ],
  },
];

const Search = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <form className={styles.form}>
          <h1 className={styles.title}>Search for books</h1>
          <SearchBar />
          <div className={styles.filters}>
            {filtersData.map((filter) => (
              <Select
                key={filter.id}
                id={filter.id}
                label={filter.label}
                options={filter.options}
              />
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
