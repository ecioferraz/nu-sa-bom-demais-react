import { ChangeEventHandler } from 'react';

interface iSelectInput {
  className: string,
  labelText: string,
  name: string,
  value: string,
  options: Array<string>,
  handleChange: ChangeEventHandler<HTMLSelectElement>,
}

export default iSelectInput;
