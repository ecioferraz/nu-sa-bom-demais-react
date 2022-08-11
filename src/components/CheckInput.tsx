import React from 'react';
import { iCheckInput } from '../interfaces';

export default function CheckInput({
  className,
  name,
  options,
  type,
  handleChange,
}: iCheckInput) {
  return (
    <>
      {options.map((option, i) => (
        <label key={ i }>
          <input
            className={ className }
            name={ name }
            value={ option }
            onChange={ ({ target: { value } }) => handleChange(value) }
            type={ type }
            defaultChecked={ i === 0 }
          />
          { option }
        </label>
      ))}
    </>
  );
}