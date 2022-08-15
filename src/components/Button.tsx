import React from 'react';
import { iButton } from '../interfaces';

export default function Button({
  type,
  name,
  handleClick,
  disabled,
  className,
}: iButton) {
  return (
    <button
      type={ type ? 'submit' : 'button' }
      name={ name }
      onClick={ handleClick }
      disabled={ disabled }
      className={ className }
    >
      { name }
    </button>
  );
}
