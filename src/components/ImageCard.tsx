import React from 'react';
import iImageCard from '../interfaces/iImageCard';

export default function ImageCard({ imageURL, name, className }: iImageCard) {
  return (
    <div className="image-card">
      <img
        alt={ `Imagem de ${name}.` }
        src={ imageURL }
        className={ className }
        width="80"
        height="100"
      />
    </div>
  );
}