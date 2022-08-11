import { ChangeEventHandler } from 'react';

interface iTextInput {
  name: string,
  labelText?: string,
  className: string,
  type: string,
  value: string,
  handleChange: ChangeEventHandler<HTMLInputElement>,
  placeholder?: string,
}

export default iTextInput;
