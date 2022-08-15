import { iProduct } from '../interfaces';

const addToCart = (item: iProduct) => {
  const localCart = JSON.parse(localStorage.getItem('cart') as string) || [];
  localStorage.setItem('cart', JSON.stringify([...localCart, item]));
};

export default addToCart;
