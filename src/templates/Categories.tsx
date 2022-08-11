import React from 'react';
import { CheckInput } from '../components';
import { iCategories } from '../interfaces';

export default function Categories({
  adjectives: categories,
  handleChange,
}: iCategories) {
  return (
    <aside>
      <h3>Categorias:</h3>
      <CheckInput
        className="categories"
        name="categories"
        handleChange={ handleChange }
        type="radio"
        options={ ['All', ...categories] }
      />
    </aside>
  );
}
