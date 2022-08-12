import React from 'react';
import { iProduct } from '../interfaces';
import CartProduct from '../templates/CartProduct';

export default function Cart() {
  const products: iProduct[] = JSON.parse(
    localStorage.getItem('cart') as string,
  );

  return (
    <main>
      <div>
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
  );
}
