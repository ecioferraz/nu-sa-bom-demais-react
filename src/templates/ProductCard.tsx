import React from 'react';
import { Button, ImageCard, TextCard } from '../components';
import { iProductCard } from '../interfaces';

export default function ProductCard({
  gallery,
  name,
  hasDiscount,
  price,
  discountValue,
}: iProductCard) {
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
        name="Adicionar ao carrinho"
        handleClick={ () => { return; } }
        className="add-btn"
      />
    </div>
  );
}
