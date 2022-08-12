import React from 'react';
import { iCheckboxInput } from '../interfaces';

export default function CheckboxInput({
  className,
  name,
  options,
  type,
  handleClick,
  value,
}: iCheckboxInput) {
  return (
    <>
      {options.map((option, i) => (
        <label key={ i }>
          <input
            className={ className }
            name={ name }
            value={ option }
            onClick={ () => handleClick(!value) }
            type={ type }
            defaultChecked={ type === 'radio' && i === 0 }
          />
          { option }
        </label>
      ))}
    </>
  );
}