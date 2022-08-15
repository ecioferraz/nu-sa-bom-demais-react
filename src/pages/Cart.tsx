import React from 'react';
import { iProduct } from '../interfaces';
import CartProduct from '../templates/CartProduct';

import '../styles/Cart.css';
import Header from '../components/Header';

export default function Cart() {
  const products: iProduct[] = JSON.parse(
    localStorage.getItem('cart') as string,
  );

  return (
    <>
      <Header />
      <main>
        <h2 className="cart-title">Cart</h2>
        <div className="cart">
          {
            products.map((product) => (
              <CartProduct
                key={ product.id }
                product={ product }
              />
            ))
          }
        </div>
      </main>
    </>
  );
}
