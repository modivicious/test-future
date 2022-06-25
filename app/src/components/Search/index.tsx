import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useAppDispatch from "../../hooks/useAppDispatch";

import fetchBooks from "../../actions/fetchBooks";
import {
  setSearchValue,
  setCategorySelected,
  setSortSelected,
  setStartIndex,
  setIsFirstFetch,
  clearBooks,
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isFirstFetch = useSelector(
    (state: any) => state.booksReducer.isFirstFetch
  );

  const onSearchValueChange = (value: string) => {
    dispatch(setSearchValue(value));
  };

  const prepareNewFetch = () => {
    dispatch(clearBooks());
    dispatch(setStartIndex(0));
  };

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

    if (!isFirstFetch) {
      prepareNewFetch();
      dispatch(fetchBooks());
    }
  };

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isFirstFetch) dispatch(setIsFirstFetch(false));
    else prepareNewFetch();

    dispatch(fetchBooks());

    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <form className={styles.form} onSubmit={onSearchSubmit}>
            <h1 className={styles.title}>Search for books</h1>
            <SearchBar onSearchValueChange={onSearchValueChange} />
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
    </div>
  );
};

export default Search;
