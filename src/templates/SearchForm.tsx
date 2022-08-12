import React from 'react';
import { TextInput } from '../components';
import { iSearchForm } from '../interfaces';

export default function SearchForm({
  searchInput,
  handleChange,
}: iSearchForm) {
  return (
    <form>
      <TextInput
        name="search-input"
        className="search-input"
        type='search'
        value={ searchInput }
        handleChange={ handleChange }
        placeholder="Buscar por..."
      />
    </form>
  );
}
