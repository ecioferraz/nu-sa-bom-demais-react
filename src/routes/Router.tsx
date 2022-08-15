import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Cart } from '../pages';
import Product from '../pages/Product';

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={ <Home /> }
      />
      <Route
        path="/cart"
        element={ <Cart /> }
      />
      <Route
        path="/:id"
        element={ <Product /> }
      />
    </Routes>
  );
}
