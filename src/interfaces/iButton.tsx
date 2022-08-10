import { MouseEventHandler } from 'react';

interface iButton {
  name: string,
  handleClick: MouseEventHandler<HTMLButtonElement>,
  type?: string,
  disabled?: boolean,
  className: string,
}

export default iButton;
