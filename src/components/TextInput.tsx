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
      <label htmlFor={ name }>{ labelText && `${labelText} ` }</label>
      <input
        className={ className }
        type={ type }
        name={ name }
        value={ value }
        onChange={ ({ target: { value } }) => handleChange(value) }
        id={ name }
        placeholder={ placeholder }
      />
    </>
  );
}
