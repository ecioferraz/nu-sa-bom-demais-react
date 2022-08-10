import React from 'react';
import { iTextCard } from '../interfaces';

export default function TextCard({ text }: iTextCard) {
  return (
    <p className="text-card-text">
      { text }
    </p>
  );
}
