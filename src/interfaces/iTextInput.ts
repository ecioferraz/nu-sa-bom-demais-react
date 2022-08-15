import { Dispatch, SetStateAction } from 'react';

interface iTextInput {
  name: string,
  labelText?: string,
  className: string,
  type: string,
  value: string,
  handleChange: Dispatch<SetStateAction<string>>,
  placeholder?: string,
}

export default iTextInput;
