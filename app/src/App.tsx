import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./components/Search";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";

const App = () => {
  return (
    <BrowserRouter>
      <Search />
      <Routes>
        <Route path="/" />
        <Route path="search" element={<ProductList />} />
        <Route path="book/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
