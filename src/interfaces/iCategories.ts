import { Dispatch, SetStateAction } from 'react';

interface iCategories {
  adjectives: Array<string>,
  handleChange: Dispatch<SetStateAction<string>>,
}

export default iCategories;
