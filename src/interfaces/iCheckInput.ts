import { Dispatch, SetStateAction } from 'react';

interface iCheckInput {
  className: string,
  name: string,
  options: Array<string>,
  handleChange: Dispatch<SetStateAction<string>>,
  type: string,
}

export default iCheckInput;
