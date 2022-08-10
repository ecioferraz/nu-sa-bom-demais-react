import React from 'react';
import { iButton } from '../interfaces';

export default function Button({
  name,
  handleClick,
  disabled,
  className,
}: iButton) {
  return (
    <button
      type={ 'button' || 'submit' }
      name={ name }
      onClick={ handleClick }
      disabled={ disabled }
      className={ className }
    >
      { name }
    </button>
  );
}
