import React from 'react';
import { CheckboxInput, Loading, RangeInput, TextInput } from '../components';
import { iSearchForm } from '../interfaces';
import Categories from './Categories';

import '../styles/SearchForm.css';

const DISCOUNT_OPTION = ['On sale'];

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
    <>
      <form className="search-form">
        <fieldset>
          <TextInput
            name="search-input"
            className="search-input"
            type='search'
            value={ searchInput }
            handleChange={ setSearchInput }
            placeholder="Search"
          />
          <section>
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
          </section>
        </fieldset>
      </form>
      {
        isLoading ? <Loading /> : <Categories
          adjectives={ categories }
          handleChange={ setSelectedCategory }
        />
      }
    </>
  );
}
