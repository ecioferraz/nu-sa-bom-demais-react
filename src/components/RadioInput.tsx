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
      {options.map((option, i) => (
        <label key={ i }>
          <input
            className={ className }
            name={ name }
            value={ option }
            onChange={ ({ target: { value } }) => handleChange(value) }
            type={ type }
            defaultChecked={ type === 'radio' && i === 0 }
          />
          { option }
        </label>
      ))}
    </>
  );
}