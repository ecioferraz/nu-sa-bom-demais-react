import React from 'react';
import iTextInput from '../interfaces/iTextInput';

export default function TextInput({
  name,
  labelText,
  className,
  type,
  value,
  handleChange,
  placeholder,
}: iTextInput) {
  return (
    <>
      <label htmlFor={ name }>{ `${labelText} ` }</label>
      <input
        className={ className }
        type={ type }
        name={ name }
        value={ value }
        onChange={ handleChange }
        id={ name }
        placeholder={ placeholder }
      />
    </>
  );
}
