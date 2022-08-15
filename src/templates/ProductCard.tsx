import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ImageCard, TextCard } from '../components';
import { iProduct, iProductCard } from '../interfaces';

import '../styles/ProductCard.css';

export default function ProductCard({ product }: iProductCard) {
  const {
    id,
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
      <Link to={`/${id}`} className="card-link">
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
      </Link>
      <Button
        name="Add to cart"
        handleClick={ () => addToCart(product) }
        className="add-btn"
      />
    </div>
  );
}
