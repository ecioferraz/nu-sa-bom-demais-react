import React from 'react';
import { iSelectInput } from '../interfaces';

export default function SelectInput({
  className,
  labelText,
  name,
  value,
  options,
  handleChange,
}: iSelectInput) {
  return (
    <>
      <label htmlFor={ name }>
        { labelText }
        {' '}
      </label>
      <select
        className={ className }
        name={ name }
        value={ value }
        onChange={ handleChange }
        id={ name }
      >
        {options.map((option) => (
          <option key={ option } value={ option }>{option}</option>
        ))}
      </select>
    </>
  );
}