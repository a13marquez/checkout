import React from 'react'
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


export const Product = ( props: ProductPropsInterface ): React.FunctionComponentElement<ProductPropsInterface> => (
  <StyledStandardRow>
    <InfoColumn
      img={props.img}
      name={props.name}
      code={props.code}
    ></InfoColumn>
    <QuantityColumn
      quantity={props.quantity}
      updateCounter={props.onUpdateCounter}
    ></QuantityColumn>
    <PriceColumn
      price={props.price}
      currency={props.currency}
    ></PriceColumn>
    <TotalColumn
      quantity={props.quantity}
      price={props.price}
      currency={props.currency}
    ></TotalColumn>
  </StyledStandardRow>
)