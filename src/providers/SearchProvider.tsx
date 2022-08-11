import React, { PropsWithChildren, useState } from 'react';
import SearchContext from '../contexts/SearchContext';

export default function SearchProvider({ children }: PropsWithChildren) {
  const [searchInput, setSearchInput] = useState('');

  const context = {
    searchInput,
    setSearchInput,
  };

  return (
    <SearchContext.Provider value={ context }>
      { children }
    </SearchContext.Provider>
  );
}
