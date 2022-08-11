import { ChangeEventHandler } from 'react';

interface iRadioInput {
  className: string,
  name: string,
  value: string,
  options: Array<string>,
  handleChange: ChangeEventHandler<HTMLInputElement>,
  type: string,
}

export default iRadioInput;
