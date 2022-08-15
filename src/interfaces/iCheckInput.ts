import { Dispatch, SetStateAction } from 'react';

interface iCheckInput {
  className: string,
  name?: string,
  options: Array<string>,
  type: string,
}

interface iRadioInput extends iCheckInput {
  handleChange: Dispatch<SetStateAction<string>>,
}

interface iCheckboxInput extends iCheckInput {
  handleClick: Dispatch<SetStateAction<boolean>>,
  value: boolean,
}

export type {
  iCheckboxInput,
  iRadioInput,
};
