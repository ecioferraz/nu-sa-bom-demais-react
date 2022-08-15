import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, ImageCard, Loading, TextCard } from '../components';
import { iProduct } from '../interfaces';
import { getData } from '../services/APIRequests';
import addToCart from '../services/addToCart';

import '../styles/Product.css';
import Header from '../components/Header';

export default function Product() {
  const [product, setProduct] = useState<iProduct>();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      const { data } = await getData(`devnology/european_provider/${id}`);
      setProduct(data);
      setIsLoading(false);
      return data;
    };
    getProduct();
  }, []);

  return (
    <>
      <Header />
      <main className="product-page">
        {
          isLoading || !product ? <Loading />
            : <div className="product">
              <ImageCard
                name={ product.name }
                imageURL={ product.gallery[0] }
                className="product-image"
              />
              <div className="product-info">
                <h1>{ product.name }</h1>
                <TextCard
                  text={ `Description: ${product.description}` }
                />
                <TextCard
                  text={ `Category: ${product.details.adjective}` }
                />
                <TextCard
                  text={ product.hasDiscount
                    ? `$ ${(+product.price - +product.discountValue)
                      .toFixed(2).toString()}`
                    : `$ ${product.price}` }
                />
                <Button
                  name="Add to cart"
                  handleClick={ () => addToCart(product) }
                  className="add-btn"
                />
              </div>
            </div>
        }
      </main>
    </>
  );
}
