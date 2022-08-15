import React from 'react';
import { CheckboxInput, RangeInput, TextInput } from '../components';
import { iSearchForm } from '../interfaces';

import '../styles/SearchForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const DISCOUNT_OPTION = ['On sale'];

export default function SearchForm({
  searchInput,
  setSearchInput,
  setWithDiscount,
  withDiscount,
  priceRange,
  setPriceRange,
}: iSearchForm) {
  return (
    <header className="search-header">
      <form>
        <div className="search-form">
          <TextInput
            name="search-input"
            className="search-input"
            type='search'
            value={ searchInput }
            handleChange={ setSearchInput }
            placeholder="Search"
          />
          <section className="search-options">
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
        </div>
      </form>
      <Link to="/cart" className="cart-btn">
        <FontAwesomeIcon icon={ faCartShopping } size={ '2x' } />
        <span>Checkout</span>
      </Link>
    </header>
  );
}
