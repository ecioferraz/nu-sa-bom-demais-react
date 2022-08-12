import React from 'react';
import { Button, ImageCard, TextCard } from '../components';
import { iProduct, iProductCard } from '../interfaces';

export default function ProductCard({ product }: iProductCard) {
  const {
    gallery,
    name,
    hasDiscount,
    price,
    discountValue,
  } = product;

  const addToCart = (item: iProduct) => {
    const localCart = JSON.parse(localStorage.getItem('cart') as string) || [];
    localStorage.setItem('cart', JSON.stringify([...localCart, item]));
  };

  return (
    <div className="product-card">
      <ImageCard
        imageURL={ gallery[0] }
        name={ name }
        className="product-image"
      />
      <TextCard
        text={ name }
      />
      <TextCard
        text={ hasDiscount
          ? `$ ${(+price - +discountValue).toFixed(2).toString()}`
          : `$ ${price}` }
      />
      <Button
        name="Add to cart"
        handleClick={ () => addToCart(product) }
        className="add-btn"
      />
    </div>
  );
}
