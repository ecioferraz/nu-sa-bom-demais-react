import React from 'react';
import { iRangeInput } from '../interfaces';

export default function RangeInput({ handleChange, value }: iRangeInput) {
  return (
    <>
      <label>
        $ 0
        <input
          className="range-input"
          type="range"
          max="1000"
          step="50"
          value={ value }
          onChange={ ({ target: { value } }) => handleChange(+value) }
        />
        { `$ ${value.toFixed(2)}` }
      </label>
    </>
  );
}
