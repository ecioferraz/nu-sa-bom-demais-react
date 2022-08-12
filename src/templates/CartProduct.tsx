import React from 'react';
import { Button, ImageCard, TextCard } from '../components';
import { iProduct, iProductCard } from '../interfaces';

export default function CartProduct({ product: {
  id,
  gallery,
  name,
  price,
} }: iProductCard) {
  const removeFromCart = () => {
    const localCart = JSON.parse(localStorage.getItem('cart') as string);
    const newCart = localCart.filter((product: iProduct) => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <div>
      <ImageCard
        imageURL={ gallery[0] }
        name={ name }
        className="product-image"
      />
      <TextCard
        text={ name }
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
