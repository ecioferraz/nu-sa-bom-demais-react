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
        <label className="radio-label" key={ i }>
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