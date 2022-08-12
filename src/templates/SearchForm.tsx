import React, { useContext } from 'react';
import { TextInput } from '../components';
import SearchContext from '../contexts/SearchContext';

export default function SearchForm() {
  const { searchInput, setSearchInput } = useContext(SearchContext);

  return (
    <form>
      <TextInput
        name="search-input"
        className="search-input"
        type='search'
        value={ searchInput }
        handleChange={ setSearchInput }
        placeholder="Buscar por..."
      />
    </form>
  );
}
