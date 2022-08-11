import React, { useState } from 'react';
import { Button, TextInput } from '../components';

export default function SearchForm() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <form>
      <TextInput
        name="search-input"
        type='search'
        value={ searchInput }
        onChange={ () => setSearchInput(searchInput) }
        placeholder="Buscar por..."
      />
      <Button
        name="search-btn"
        handleClick={ () => {} }
        className="search-btn"
      />
    </form>
  );
}
