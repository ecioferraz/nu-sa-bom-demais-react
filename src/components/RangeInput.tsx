import React from 'react';
import { iRangeInput } from '../interfaces';

export default function RangeInput({ handleChange, value }: iRangeInput) {
  return (
    <>
      <label>
        <input
          type="range"
          max="1000"
          step="10"
          value={ value }
          onChange={ ({ target: { value } }) => handleChange(+value) }
        />
        { `R$ ${value.toFixed(2)}` }
      </label>
    </>
  );
}
