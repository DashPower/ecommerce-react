import React from "react";
import ItemListContainer from "./ItemListContainer";
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import Checkout from "./Checkout";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer greetings="Jose" />} />
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer greetings="Jose" />}
        />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </main>
  );
};

export default Main;
