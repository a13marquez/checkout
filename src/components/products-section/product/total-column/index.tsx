import *  as React from 'react';
import StyledStandardColumn 
  from '@bit/a13marquez.styled-components.styled-standard-column';
import { StyledPrice, StyledCurrency } from '../../../Shared';


interface TotalColumnPropsInterface {
  currency: string;
  price: number;
  quantity: number;
}

export const TotalColumn: React.FunctionComponent<TotalColumnPropsInterface> = 
  ({currency, price, quantity}) => (
  <StyledStandardColumn width='15%'>
      <StyledPrice>{(price * quantity).toLocaleString()}</StyledPrice>
    <StyledCurrency>{currency}</StyledCurrency>
  </StyledStandardColumn>
  );