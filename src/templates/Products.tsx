import React from 'react';
import { iProduct } from '../interfaces';
import ProductCard from './ProductCard';

interface iProducts {
  products: Array<iProduct>
}

export default function Products({ products }: iProducts) {
  return (
    <>
      {
        products.map(({
          gallery,
          name,
          hasDiscount,
          price,
          discountValue,
          id,
        }) => (
          <ProductCard
            key={ id }
            gallery={ gallery }
            name={ name }
            hasDiscount={ hasDiscount }
            price={ price }
            discountValue={ discountValue }
          />
        ))
      }
    </>
  );
}
