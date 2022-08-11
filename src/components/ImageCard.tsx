import React from 'react';
import { iImageCard } from '../interfaces';

export default function ImageCard({ imageURL, name, className }: iImageCard) {
  return (
    <div className="image-card">
      <img
        alt={ `Imagem de ${name}.` }
        src={ imageURL }
        className={ className }
        width="100"
        height="80"
      />
    </div>
  );
}