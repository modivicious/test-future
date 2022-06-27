import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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
