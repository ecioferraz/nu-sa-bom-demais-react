import React, { useContext, useEffect, useState } from 'react';
import { CheckboxInput } from '../components';
import Loading from '../components/Loading';
import SearchContext from '../contexts/SearchContext';
import { iProduct } from '../interfaces';
import { getData } from '../services/APIRequests';
import Categories from '../templates/Categories';
import Products from '../templates/Products';
import SearchForm from '../templates/SearchForm';

export default function Home() {
  const { searchInput } = useContext(SearchContext);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<iProduct[]>([]);
  const [withDiscount, setWithDiscount] = useState<boolean>(false);

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

  const displayedProducts = selectedCategory === 'All'
    ? products
    : products.filter(({ details: { adjective } }) =>
      adjective.includes(selectedCategory));

  return (
    <main>
      <SearchForm />
      {
        isLoading ? <Loading /> : <Categories
          adjectives={ categories }
          handleChange={ setSelectedCategory }
        />
      }
      <CheckboxInput
        className="discount-input"
        options={ ['Com desconto'] }
        type="checkbox"
        handleClick={ setWithDiscount }
        value={ withDiscount }
      />
      <Products
        products={ displayedProducts
          .filter(({ hasDiscount }) => withDiscount
            ? hasDiscount && withDiscount : displayedProducts)
          .filter(({ name }) =>
            name.toLowerCase().includes(searchInput.toLowerCase()))
        }
      />
    </main>
  );
}
