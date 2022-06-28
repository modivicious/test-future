import * as React from "react";
import { useEffect } from "react";

import BooksList from "../../components/BooksList";

const SearchResults = () => {
  useEffect(() => {
    document.title = "Search - React Books";
  }, []);

  return <BooksList />;
};

export default SearchResults;
