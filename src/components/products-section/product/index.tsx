import *  as React from 'react';
import { StyledStandardRow } from '@bit/a13marquez.styled-components.styled-standard-row';
import { InfoColumn } from './info-column';
import { QuantityColumn } from './quantity-column';
import { PriceColumn } from './price-column';
import { TotalColumn } from './total-column';

export interface ProductPropsInterface {
  key:number | string,
  name: string,
  code: string,
  quantity: number,
  img: string,
  onUpdateCounter: any,
  price: number,
  currency: string,
  children?:never[],
}


export const Product = ( {
  img, 
  name, 
  code, 
  quantity, 
  onUpdateCounter,
  price, 
  currency }: ProductPropsInterface ): React.FunctionComponentElement<ProductPropsInterface> => (
  <StyledStandardRow>
    <InfoColumn
      img={img}
      name={name}
      code={code}
     />
    <QuantityColumn
      quantity={quantity}
      updateCounter={onUpdateCounter}
     />
    <PriceColumn
      price={price}
      currency={currency}
     />
    <TotalColumn
      quantity={quantity}
      price={price}
      currency={currency}
     />
  </StyledStandardRow>
);