interface details {
  adjective: string,
  material: string,
}

interface iProduct {
  hasDiscount: boolean,
  name: string,
  gallery: Array<string>,
  description: string,
  price: string,
  discountValue: string,
  details: details,
  id: string,
}

export default iProduct;
