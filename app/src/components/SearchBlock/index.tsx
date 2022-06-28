import * as React from "react";
import { useNavigate, Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store";

import { fetchBooks } from "../../store/reducers/actionCreators";
import {
  setSearchValue,
  setCategorySelected,
  setSortSelected,
  setIsFirstFetch,
} from "../../store/reducers/bookSlice";
import { filtersData } from "../../data";

import SearchBar from "../SearchBar";
import Select from "../Select";

import styles from "./SearchBlock.module.scss";

const SearchBlock = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isFirstFetch = useAppSelector(
    (state: RootState) => state.bookSlice.isFirstFetch
  );
  const searchValue = useAppSelector(
    (state: RootState) => state.bookSlice.searchValue
  );

  const onSearchValueChange = (value: string) => {
    dispatch(setSearchValue(value));
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

    if (!isFirstFetch && searchValue) dispatch(fetchBooks());
  };

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue) {
      if (isFirstFetch) dispatch(setIsFirstFetch(false));

      dispatch(fetchBooks());

      navigate("search");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <form className={styles.form} onSubmit={onSearchSubmit}>
            <Link className={styles.titleLink} to={"/"}>
              <h1 className={styles.title}>Search for books</h1>
            </Link>
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

export default SearchBlock;
