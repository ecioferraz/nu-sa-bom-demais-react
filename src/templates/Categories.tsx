import React from 'react';
import { RadioInput } from '../components';
import { iCategories } from '../interfaces';

import '../styles/Categories.css';

export default function Categories({
  adjectives: categories,
  handleChange,
}: iCategories) {
  return (
    <aside className="categories">
      <h3>Categories:</h3>
      <RadioInput
        className="side-"
        name="categories"
        handleChange={ handleChange }
        type="radio"
        options={ ['All', ...categories] }
      />
    </aside>
  );
}
