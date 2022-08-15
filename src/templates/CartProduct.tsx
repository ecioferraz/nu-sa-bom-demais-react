import React from 'react';
import { Button, ImageCard, TextCard } from '../components';
import { iProduct, iProductCard } from '../interfaces';

export default function CartProduct({ product: {
  id,
  gallery,
  name,
  price,
  description
} }: iProductCard) {
  const removeFromCart = () => {
    const localCart = JSON.parse(localStorage.getItem('cart') as string);
    const newCart = localCart.filter((product: iProduct) => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <div className="cart-product-card">
      <ImageCard
        imageURL={ gallery[0] }
        name={ name }
        className="cart-product-image"
      />
      <TextCard
        text={ name }
      />
      <TextCard
        text={ description }
      />
      <TextCard
        text={ `$ ${price}` }
      />
      <Button
        name="X"
        handleClick={ removeFromCart }
        className="remove-btn"
      />
    </div>
  );
}
