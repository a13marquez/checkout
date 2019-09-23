
export const getOneFree = (price: number, quantity: number): 
{ price: number, discount: number } => {
  const totalPrice = price * quantity;
  return {
    price: totalPrice,
    discount:  quantity <= 0 ? 0 :
      quantity % 2 === 0 && quantity >= 2 ?
        price * quantity / 2 :
        price * (quantity - 1) / 2,
  };
};

export const bulkPriceDiscount =
(bulkPrice: number, price: number, quantity: number): 
{price: number, discount: number}   => {
  const reducedPrice = bulkPrice * quantity;
  const totalPrice = price * quantity;
  return {
    price: reducedPrice,
    discount: totalPrice - reducedPrice,
  };
};
