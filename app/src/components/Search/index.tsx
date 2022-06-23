import * as React from "react";
import { useState } from "react";
import useAppDispatch from "../../hooks/useAppDispatch";

import getBooks from "../../actions/getBooks";
import {
  setCategorySelected,
  setSortSelected,
} from "../../actions/actionCreator";

import SearchBar from "../SearchBar";
import Select from "../Select";

import styles from "./Search.module.scss";

const filtersData = [
  {
    id: "categories",
    label: "categories",
    options: [
      { name: "all", value: "" },
      { name: "art" },
      { name: "biography" },
      { name: "computers" },
      { name: "history" },
      { name: "medical" },
      { name: "poetry" },
    ],
  },
  {
    id: "sort",
    label: "sorting by",
    options: [{ name: "relevance" }, { name: "newest" }],
  },
];

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFirstSearch, setIsFirstSearch] = useState(true);

  const dispatch = useAppDispatch();

  const onSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {
    switch (id) {
      case "categories":
        dispatch(setCategorySelected(e.target.value));
        break;
      case "sort":
        dispatch(setSortSelected(e.target.value));
        break;
    }

    if (!isFirstSearch) {
      dispatch(getBooks(searchValue));
    }
  };

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isFirstSearch) setIsFirstSearch(false);

    dispatch(getBooks(searchValue));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <form className={styles.form} onSubmit={onSearchSubmit}>
          <h1 className={styles.title}>Search for books</h1>
          <SearchBar setSearchValue={setSearchValue} />
          <div className={styles.filters}>
            {filtersData.map((filter) => (
              <Select
                key={filter.id}
                id={filter.id}
                label={filter.label}
                options={filter.options}
                onChange={onSelectChange}
              />
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
