import React from 'react';
import { CheckboxInput, Loading, RangeInput, TextInput } from '../components';
import { iSearchForm } from '../interfaces';
import Categories from './Categories';

const DISCOUNT_OPTION = ['Com desconto'];

export default function SearchForm({
  searchInput,
  setSearchInput,
  isLoading,
  categories,
  setSelectedCategory,
  setWithDiscount,
  withDiscount,
  priceRange,
  setPriceRange,
}: iSearchForm) {
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
      {
        isLoading ? <Loading /> : <Categories
          adjectives={ categories }
          handleChange={ setSelectedCategory }
        />
      }
      <CheckboxInput
        className="discount-input"
        options={ DISCOUNT_OPTION }
        type="checkbox"
        handleClick={ setWithDiscount }
        value={ withDiscount }
      />
      <RangeInput
        value={ priceRange }
        handleChange={ setPriceRange }
      />
    </form>
  );
}
