import { Dispatch, SetStateAction } from 'react';

interface iRadioInput {
  className: string,
  name: string,
  options: Array<string>,
  handleChange: Dispatch<SetStateAction<string>>,
  type: string,
}

export default iRadioInput;
