import { Dispatch, SetStateAction } from 'react';

interface iRangeInput {
  handleChange: Dispatch<SetStateAction<number>>,
  value: number,
}

export default iRangeInput;
