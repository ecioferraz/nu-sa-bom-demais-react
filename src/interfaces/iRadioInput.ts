import { ChangeEventHandler } from 'react';

interface iRadioInput {
  className: string,
  name: string,
  options: Array<string>,
  handleChange: ChangeEventHandler<HTMLInputElement>,
  type: string,
}

export default iRadioInput;
