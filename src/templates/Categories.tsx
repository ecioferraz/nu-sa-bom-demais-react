import React from 'react';
import { RadioInput } from '../components';
import { iCategories } from '../interfaces';

export default function Categories({ adjectives: categories }: iCategories) {
  return (
    <aside>
      <RadioInput
        className="categories"
        name="categories"
        onChange={ () => {} }
        type="radio"
        options={ categories }
      />
    </aside>
  );
}
