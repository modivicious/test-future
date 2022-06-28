import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import SearchBlock from "./components/SearchBlock";
import SearchResults from "./pages/SearchResults";
import CurrentBook from "./pages/CurrentBook";

const App = () => {
  return (
    <BrowserRouter>
      <SearchBlock />
      <Routes>
        <Route path="/" />
        <Route path="search" element={<SearchResults />} />
        <Route path="book/:id" element={<CurrentBook />} />
      </Routes>
      <ToastContainer
        position="bottom-left"
        closeButton={true}
        pauseOnHover={false}
        draggable={false}
      />
    </BrowserRouter>
  );
};

export default App;
