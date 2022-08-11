import React, { useEffect, useState } from 'react';
import iProduct from '../interfaces/iProduct';
import { getData } from '../services/APIRequests';
import Categories from '../templates/Categories';
import SearchForm from '../templates/SearchForm';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await getData('devnology/european_provider');
      setCategories(Array.from(new Set(data.map((product: iProduct) =>
        product.details.adjective).sort())));
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
    </main>
  );
}
