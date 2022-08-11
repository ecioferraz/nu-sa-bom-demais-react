import React, { useEffect, useState } from 'react';
import { iProduct } from '../interfaces';
import { getData } from '../services/APIRequests';
import Categories from '../templates/Categories';
import Products from '../templates/Products';
import SearchForm from '../templates/SearchForm';

export default function Home() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState<iProduct[]>([]);

  const serializeCategories = (data: iProduct[]) => Array.from(
    new Set(data.map((product: iProduct) =>
      product.details.adjective).sort()));
  
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await getData('devnology/european_provider');
      setProducts(data);
      setCategories(serializeCategories(data));
      return data;
    };
    getCategories();
  }, []);

  return (
    <main>
      <SearchForm />
      <Categories
        adjectives={ categories }
        handleChange={ setSelectedCategory }
      />
      <Products
        products={ products }
      />
    </main>
  );
}
