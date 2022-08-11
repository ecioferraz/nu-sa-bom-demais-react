import React from 'react';
import { iRadioInput } from '../interfaces';

export default function RadioInput({
  className,
  name,
  options,
  type,
  handleChange,
}: iRadioInput) {
  return (
    <>
      {options.map((option) => (
        <label htmlFor={ name } key={ option }>
          <input
            className={ className }
            name={ name }
            onChange={ ({ target: { value } }) => handleChange(value) }
            id={ name }
            type={ type }
          />
          { option }
        </label>
      ))}
    </>
  );
}