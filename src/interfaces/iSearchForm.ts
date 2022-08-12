import { Dispatch, SetStateAction } from 'react';

interface iSearchForm {
  searchInput: string,
  handleChange: Dispatch<SetStateAction<string>>,
}

export default iSearchForm;
