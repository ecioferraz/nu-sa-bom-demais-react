import React from 'react';
import { Button, ImageCard, TextCard } from '../components';
import { iProductCard } from '../interfaces';

export default function CartProduct({ product: {
  gallery,
  name,
  price,
} }: iProductCard) {
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
        handleClick={ () => {return;} }
        className="remove-btn"
      />
    </div>
  );
}
