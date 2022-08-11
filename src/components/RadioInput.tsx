import React from 'react';
import { iRadioInput } from '../interfaces';

export default function RadioInput({
  className,
  name,
  value,
  options,
  type,
  handleChange,
}: iRadioInput) {
  return (
    options.map((option) => (
      <label htmlFor={ name } key={ name }>
        <input
          className={ className }
          name={ name }
          value={ value }
          onChange={ handleChange }
          id={ name }
          type={ type }
        />
        { option }
      </label>
    ))
  );
}