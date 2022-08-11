import React from 'react';
import { RadioInput } from '../components';
import { iCategories } from '../interfaces';

export default function Categories({
  adjectives: categories,
  handleChange,
}: iCategories) {
  return (
    <aside>
      <RadioInput
        className="categories"
        name="categories"
        handleChange={ handleChange }
        type="radio"
        options={ ['All', ...categories] }
      />
    </aside>
  );
}
