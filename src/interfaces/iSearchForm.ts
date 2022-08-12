import { Dispatch, SetStateAction } from 'react';

interface iSearchForm {
  searchInput: string,
  setSearchInput: Dispatch<SetStateAction<string>>,
  isLoading: boolean,
  categories: Array<string>,
  setSelectedCategory: Dispatch<SetStateAction<string>>,
  setWithDiscount: Dispatch<SetStateAction<boolean>>,
  withDiscount: boolean,
  priceRange: number,
  setPriceRange: Dispatch<SetStateAction<number>>,
}

export default iSearchForm;
