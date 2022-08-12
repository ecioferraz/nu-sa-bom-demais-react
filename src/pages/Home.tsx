import React, { useEffect, useState } from 'react';
import { CheckboxInput, Loading } from '../components';
import RangeInput from '../components/RangeInput';
import { iProduct } from '../interfaces';
import { getData } from '../services/APIRequests';
import Categories from '../templates/Categories';
import Products from '../templates/Products';
import SearchForm from '../templates/SearchForm';

const DISCOUNT_OPTION = ['Com desconto'];

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<iProduct[]>([]);
  const [withDiscount, setWithDiscount] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState(1000);

  const serializeCategories = (data: iProduct[]) => Array.from(
    new Set(data.map((product: iProduct) =>
      product.details.adjective).sort()));
  
  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const { data } = await getData('devnology/european_provider');
      setProducts(data);
      setCategories(serializeCategories(data));
      setIsLoading(false);
      return data;
    };
    getProducts();
  }, []);

  const productsByCategory = selectedCategory === 'All'
    ? products
    : products.filter(({ details: { adjective } }) =>
      adjective.includes(selectedCategory));

  const displayProducts = () => {
    return productsByCategory
      .filter(({ hasDiscount }) => withDiscount
        ? hasDiscount && withDiscount : productsByCategory)
      .filter(({ name }) =>
        name.toLowerCase().includes(searchInput.toLowerCase()))
      .filter(({ price }) => +price <= priceRange);
  };

  return (
    <main>
      <SearchForm
        searchInput={ searchInput }
        handleChange={ setSearchInput }
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
      <Products
        products={ displayProducts() }
      />
    </main>
  );
}
