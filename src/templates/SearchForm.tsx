import React, { useContext } from 'react';
import { Button, TextInput } from '../components';
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
      <Button
        name="Buscar"
        handleClick={ () => { return; } }
        className="search-btn"
      />
    </form>
  );
}
