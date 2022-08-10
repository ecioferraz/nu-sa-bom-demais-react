import { MouseEventHandler } from 'react';

interface iButton {
  name: string,
  handleClick: MouseEventHandler<HTMLButtonElement>,
  type?: boolean,
  disabled?: boolean,
  className: string,
}

export default iButton;
