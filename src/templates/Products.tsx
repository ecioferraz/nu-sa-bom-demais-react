import React from 'react';
import { iProducts } from '../interfaces';
import ProductCard from './ProductCard';

export default function Products({ products }: iProducts) {
  return (
    <section className="products">
      {
        products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
          />
        ))
      }
    </section>
  );
}
