import { createContext, Dispatch, SetStateAction } from 'react';

type SearchContextType = {
  searchInput: string,
  setSearchInput: Dispatch<SetStateAction<string>>;
}

const initialValue = {
  searchInput: '',
  setSearchInput: () => undefined,
};

const SearchContext = createContext<SearchContextType>(initialValue);

export default SearchContext;
